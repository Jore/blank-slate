import dom from 'common/Dom';
import prg from 'common/Constants';
import { getContainer } from 'common/Helpers';

const handleSearchSubmit = ({ currentTarget: self }) => {
  const $searchForm = getContainer({ name: 'global-header-search', asJquery: true });
  const $searchInput = $searchForm.find(dom.searchInput);
  const searchIsActive = $searchInput.hasClass(dom.isActiveClassName);
  const searchIsBlank = $searchInput.val() == '';

  if (searchIsActive && !searchIsBlank) {
    $searchForm.submit();
  } else if (searchIsActive && searchIsBlank) {
    PubSub.publish(prg.toggle, {
      selector: dom.searchInput,
      className: dom.isActiveClassName,
      action: 'remove',
      animated: false
    });
  } else {
    PubSub.publish(prg.toggle, {
      selector: dom.searchInput,
      className: dom.isActiveClassName,
      action: 'add',
      animated: false
    });
  }

  return false;
};

export const bindActions = () => {
  $(dom.searchSubmit).on('click', handleSearchSubmit);
};
