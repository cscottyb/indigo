After src/build/pingen.css is created

readfile to parse out strings into hex;

create json = pingenJSON
  brightness
    if brightness is < than AA ratio
      [0] do nothing (css will change # to body color)
      [1] turn to white
      [2] desaturate to 10%

    else
      if brightness is > 90%
        [0] do nothing
        [1] turn to white (theme color)
        [2] desaturate to 10%
      else
        [0] do nothing
        [1] increase brightness by 10%
        [2] desaturate

createfile pingenJSON -> build/pingen.json

{
  default: #12345;
  hover: #12345;
  inactive: #12345
}

function(pingen)
  get pingen.json

  loop
    create svg file with key name
      append prefix string.
      append hex value
      append suffix string.
      save file.


create another program: custom-pingen

"pingen": "js/pingin.js"
"mypingen": "js/mypingen.js"
