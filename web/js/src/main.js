import alpineInit from './alpineInit.js';
import focusFirstInput from './focusFirstInput.js';
import handleConfirmationDialogs from './confirmationDialog.js';
import handleCopyCreds from './copyCreds.js';
import handleCronGenerator from './cronGenerator.js';
import handleDiscardAllMail from './discardAllMail.js';
import handleErrorMessage from './errorHandler.js';
import handleListSelectAll from './listSelectAll.js';
import handleListSorting from './listSorting.js';
import handleLoadingSpinner from './loadingSpinner.js';
import handleNameServerInput from './nameServerInput.js';
import handlePasswordInput from './passwordInput.js';
import handleShortcuts from './shortcuts.js';
import handleStickyToolbar from './stickyToolbar.js';
import handleTabPanels from './tabPanels.js';
import handleToggleAdvanced from './toggleAdvanced.js';
import handleUnlimitedInput from './unlimitedInput.js';
import * as helpers from './helpers.js';

window.Hestia = { helpers };

initListeners();
focusFirstInput();

function initListeners() {
	handleConfirmationDialogs();
	handleCopyCreds();
	handleCronGenerator();
	handleDiscardAllMail();
	handleListSelectAll();
	handleListSorting();
	handleLoadingSpinner();
	handleNameServerInput();
	handlePasswordInput();
	handleStickyToolbar();
	handleTabPanels();
	handleToggleAdvanced();
}

document.addEventListener('alpine:init', () => {
	alpineInit();
	handleErrorMessage();
	handleShortcuts();
	handleUnlimitedInput();
});
