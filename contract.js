var arCuMessages = ["Hi, I'm Rubel", "How can I help you", "You can share your problem with us", "We will try to solve it"];

var arCuLoop = false;

var arCuCloseLastMessage = false;

var arCuPromptClosed = false;

var _arCuTimeOut = null;

var arCuDelayFirst = 2000;

var arCuTypingTime = 2000;

var arCuMessageTime = 4000;

var arCuClosedCookie = 0;

var arcItems = [];

window.addEventListener('load', function() {

  arCuClosedCookie = arCuGetCookie('arcu-closed');

  jQuery('#arcontactus').on('arcontactus.init', function() {

    if (arCuClosedCookie) {

      return false;

    }

    arCuShowMessages();

  });

  jQuery('#arcontactus').on('arcontactus.openMenu', function() {

    clearTimeout(_arCuTimeOut);

    arCuPromptClosed = true;

    jQuery('#contact').contactUs('hidePrompt');

    arCuCreateCookie('arcu-closed', 1, 30);

  });

  jQuery('#arcontactus').on('arcontactus.hidePrompt', function() {

    clearTimeout(_arCuTimeOut);

    arCuPromptClosed = true;

    arCuCreateCookie('arcu-closed', 1, 30);

  });

  var arcItem = {};

  arcItem.id = 'msg-item-1';

  arcItem.class = 'msg-item-facebook-messenger';

  arcItem.title = 'Massenger';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path></svg>';

  arcItem.href = 'https://m.me/ourislamBD.Official';

  arcItem.color = '#567AFF';

  arcItems.push(arcItem);

  var arcItem = {};

  arcItem.id = 'msg-item-9';

  arcItem.class = 'msg-item-telegram-plane';

  arcItem.title = 'Telegram Chat ';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>';

  arcItem.href = 'https://zalo.me/1804010181';

  arcItem.color = '#1EBEA5';

  arcItems.push(arcItem);

  var arcItem = {};

  arcItem.id = 'msg-item-6';

  arcItem.class = 'msg-item-skype';

  arcItem.title = 'Skype Chat';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 285.8 32 227.9 32 104.1 32 1 135.2 1 258c0 45.5 12 89.9 35 128.9L0 512l129.9-34c37 20.1 78.4 30.9 121.1 30.9H256c123.7 0 226.9-103.2 226.9-226.9 0-57.8-23.1-111.1-65.1-152.9zM227.9 448c-37.3 0-73.7-9.8-105.6-28.3l-7.6-4.4-77.2 20.2 20.6-75-5-7.8C34 320.5 23.9 289.5 23.9 258 23.9 151.3 121.2 54 227.9 54c52.7 0 102.2 20.5 139.5 57.8 37.3 37.3 57.8 86.8 57.8 139.5 0 106.7-97.3 193.9-193.9 193.9zm106.4-142.6c-5.7-2.9-33.7-16.7-39-18.6s-9-2.9-12.8 2.9-14.7 18.6-18 22.4-6.7 4.3-12.4 1.4c-33.7-16.7-55.9-29.8-78.5-67.5-5.9-10.2 5.9-9.5 16.7-31.7 1.8-3.7 .9-6.9-.5-9.8s-12.8-30.7-17.6-42c-4.6-11-9.2-9.1-12.8-9.3-3.3-.2-7.1-.2-11-.2s-9.9 1.4-15.2 6.9c-5.1 5.2-19.9 19.4-19.9 47.3s20.4 54.9 23.2 58.7c2.9 3.8 40.2 61.3 97.4 86.1 13.6 5.9 24.2 9.5 32.5 12.2 13.7 4.3 26.2 3.7 36 2.3 10.9-1.6 33.7-13.8 38.4-27.2 4.7-13.3 4.7-24.8 3.3-27.2-1.4-2.3-5.2-3.7-10.9-6.6z"></path></svg>';

  arcItem.href = 'skype://rubel?chat';

  arcItem.color = '#1C9CC5';

  arcItems.push(arcItem);

  var arcItem = {};

  arcItem.id = 'msg-item-7';

  arcItem.class = 'msg-item-envelope';

  arcItem.title = 'Email';

  arcItem.icon = '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg>';

  arcItem.href = 'mailto:contact.rubelour@gmail.com';

  arcItem.color = '#FF643A';

  arcItems.push(arcItem);

  var arcItem = {};

  arcItem.id = 'msg-item-8';

  arcItem.class = 'msg-item-phone';

  arcItem.title = 'Call 01771687270';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>';

  arcItem.href = 'tel:01771687270';

  arcItem.color = '#4EB625';

  arcItems.push(arcItem);

  jQuery('#arcontactus').contactUs({

    items: arcItems

  });

});
