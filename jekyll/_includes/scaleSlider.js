                function ScaleSlider()
                {
                    var bodyWidth = document.body.clientWidth;
                    if (bodyWidth)
                        jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
                    else
                        $Jssor$.$Delay(ScaleSlider, 30);
                }


                //carousel settings
                var options =
                {
                    $AutoPlay: true,
                    $Idle: 7000,
                    $DragOrientation: 0
                };


                var jssor_slider1 = new $JssorSlider$("slider1_container", options);
                ScaleSlider();
                $Jssor$.$AddEvent(window, "load", ScaleSlider);
                $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
                $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
