!function(n){"use strict";n(document).ready(function(){n(".main-navigation.onclick").length>0&&n(window).width()>991&&n.notify({message:'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'},{type:"info",delay:1e4,offset:{y:150,x:20}}),!(n(".main-navigation.animated").length>0)&&n(window).width()>991&&n(".main-navigation").length>0&&n.notify({message:"The animations of main menu are disabled."},{type:"info",delay:1e4,offset:{y:150,x:20}})})}(jQuery);