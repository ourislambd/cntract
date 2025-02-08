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

  arcItem.title = 'Whatsapp';

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path></svg>';

  arcItem.href = 'https://wa.me/8801771687270';

  arcItem.color = '#25D366';

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
