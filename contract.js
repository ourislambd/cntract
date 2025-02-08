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

  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
    c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
    c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
    c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
    c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
    c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
    c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
    c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
    c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
    C233.168,179.508,230.845,178.393,227.904,176.981z"/>
  <path fill="currentColor" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
    c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
    c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
     M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
    l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
    c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
    C276.546,215.678,222.799,268.994,156.734,268.994z"/></svg>';

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
