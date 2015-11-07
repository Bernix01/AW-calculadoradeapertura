'use strict';

/**
 * @ngdoc function
 * @name awContraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the awContraApp
 */
angular.module('awContraApp')
    .controller('MainCtrl', function () {
        var vm = this;
        this.prog = 0;
        this.doing=false;
        this.qs = {
            "questions": [
                {
                    "q": "1.	Has conocido al amor de tu vida y sus creencias religiosas difieren de las tuyas. La cosa va en serio y comienzan a hablar de casarse. Tú:",
                    "opts": [
                        {
                            "opt": "a)	Te interesas de inmediato por conocer las creencias del otro y por qué son importantes. Aceptas sus prácticas y empiezas a tomar algunas para tu vida hasta que boom, te cambiaste de religión.",
                            "rel": 1
                        },
                        {
                            "opt": "b)	Propones que solo se casen civil y cada quién que haga lo que le funcione. Al final lo que te importa es estar juntos.",
                            "rel": 2

                        },
                        {
                            "opt": "c)	Desde el primer momento dejas claro que no vas a caminar ni un paso hacia otro lugar que no sea el altar de tu iglesia. Si no ceden, te buscas otro amor de la vida.",
                            "rel": 3

                        }
                    ]

                },
                {
                    "q": "2.	Estás en grupo organizando una reunión y de repente escuchas “vienen él y su novio”. Haces lo siguiente:",
                    "opts": [
                        {
                            "opt": "a)	Demuestras emoción por la noticia y te fijas si alguien reacciona de manera opuesta.",
                            "rel": 1
                        },
                        {
                            "opt": "b)	Preguntas qué te toca llevar.",
                            "rel": 2

                        },
                        {
                            "opt": "c)	Preguntas si escuchaste bien porque seguro es una equivocación. De la naturaleza.",
                            "rel": 3

                        }
                    ]

                },
                {
                    "q": "3.	Tu amiga comprometida te confiesa que su casi esposo no está de acuerdo en el uso de anticonceptivos y que los ha dejado. ¿Cuál es tu reacción?",
                    "opts": [
                        {
                            "opt": "a)	Le regalas un delantal que le combine con su hogar de 1950 porque quién sabe, la gente en esa época manejaba todo como por arte de magia.",
                            "rel": 1
                        },
                        {
                            "opt": "b)	Le dices que crees que la decisión debería ser suya y que lo piense bien. Mueres un poco por dentro.",
                            "rel": 2

                        },
                        {
                            "opt": "c)	Mencionas las palabras “cancelar”, “boda” y “curuchupa” por lo menos unas cinco veces.",
                            "rel": 3

                        }
                    ]

                },
                {
                    "q": "4.	Elige las palabras que asocies de inmediato con esta imagen:",
                    "opts": [
                        {
                            "opt": "a)	Prospecto.",
                            "rel": 1
                        },
                        {
                            "opt": "b)	\“Attention whore\”.",
                            "rel": 2

                        },
                        {
                            "opt": "c)	Drogadicto.",
                            "rel": 3

                        }
                    ],
                    "img":"/images/man.jpg"

                },
                {
                    "q": "5.	Eres mujer. Los hombres de la oficina se van a un strip club a la salida y te invitan. ¿Cuál es tu reacción?",
                    "opts": [
                        {
                            "opt": "a)	Te choca, pero respondes \"¡De una!\". Tus compañeros te elogian con una comparación aparentemente de superioridad ante las otras chicas que se escandalizaron. Disfrutas el reconocimiento.",
                            "rel": 1
                        },
                        {
                            "opt": "b)	Declinas la oferta, pero haces un buen chiste sobre por qué no vas. El chiste es feminista.",
                            "rel": 2

                        },
                        {
                            "opt": "c)	Te ofendes ante la pregunta, los miras con asco y dices “no gracias”. Te vas sin despedirte.",
                            "rel": 3

                        }
                    ]

                },
                {
                    "q": "6) Los sitios para buscar pareja on line son:",
                    "opts": [
                        {
                            "opt": "a)	Un gran medio que evidencia las necesidades actuales. Si no lo has probado, no has vivido.",
                            "rel": 1
                        },
                        {
                            "opt": "b)	Una buena opción para algunos pero no para mí.",
                            "rel": 2

                        },
                        {
                            "opt": "c)	Un lugar lleno de fracasados y antisociales esperando víctimas.",
                            "rel": 3

                        }
                    ]

                }
        ]
        }
        this.dial = $(".dial .inner");
        this.gauge_value = $(".gauge .value");
        this.current = 0;
        this.setMeter = function(value) {
            var deg = 0;
            deg = (value * 177.5) / 100;
            console.log(vm.gauge_value);

            vm.gauge_value.html(value + "%");

            vm.dial.css({
                'transform': 'rotate(' + deg + 'deg)'
            });
            vm.dial.css({
                '-ms-transform': 'rotate(' + deg + 'deg)'
            });
            vm.dial.css({
                '-moz-transform': 'rotate(' + deg + 'deg)'
            });
            vm.dial.css({
                '-o-transform': 'rotate(' + deg + 'deg)'
            });
            vm.dial.css({
                '-webkit-transform': 'rotate(' + deg + 'deg)'
            });
        };
        this.proc = function (opt) {
            if(vm.doing)
                return;
            vm.doing= true;

            switch (opt.rel){
                case 1:
                    if(vm.prog >15)
                        vm.prog -= 15;
                    break;
                case 2:
                    if(vm.prog<86)
                    vm.prog += 15;
                    break;
                case 3:
                    if(vm.prog<71)
                    vm.prog += 30;
                    break;

            }
            vm.setMeter(vm.prog);
            if(vm.current===5){
                var res= Math.round(vm.prog*0.03);
                console.log(res);
                switch(res){
                    case 1:
                        document.location.href= 'navto://relative/current#3';
                        break;
                    case 2:

                        document.location.href= 'navto://relative/current#4';
                        break;
                    case 3:
                        document.location.href= 'navto://relative/current#5';
                        break;



                }
                return;
            }
            vm.current+=1;
            vm.doing = false;
        };
    });
