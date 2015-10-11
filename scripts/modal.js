/**
 * Generic and Specific Modals
 * @provides $.modalize, $.shareModal, $.breadCrumbModal, $.languageModal
 *           $.submenuModal, $.videoModal, $.resourceModal
 * @requires util.js
 **/
(function($){

    /**
     * Find a jQuery element starting at the current element or the the
     * provided context by selecting the contextual parent and trying to match
     * an element based on the selector. If no element is found, continue 
     * iterating up the DOM tree until one is found. If no element can be found
     * in the entire document, return the defaultMatch instead.
     **/
    $.fn.fuzzy = function(selector, context, defaultMatch){
        if(!defaultMatch){
            defaultMatch = $(document);
        }

        var current = context ? $(context) : $(this);
        while(current && current.length){
            var matches = $(selector, current);
            if(matches && matches.length){
                return matches.first();
            } else {
                current = current.parent();
            }
        }
        return defaultMatch; 
    };


    /**
     * Turn a link and a container into a modal
     **/
    $.fn.modalize = function(params){
        var defaults = {
            modalSelector:".ply-modal",
            closeSelector:".ply-modal-close",
            modalLinkActiveClass:"ply-modal-link-active",
            modalActiveClass:"ply-modal-active",
            reparent:"body",
            modalLinkPreventDefault:true,
            modalClosePreventDefault:true,
            modalSelectorUseFuzzy:false,
            openOnMouseOver:false,
            closeOnEscape:true, 
            closeOnDocumentClick:true,
            closeOnDocumentTap:false,
            repositionOnResize:false,
            repositionOnResizeTimeout:150,
            position:{
                my:"center",
                at:"center",
                of:$(window)
            }, 
            opener:null, 
            closer:null,
            eventPrefix:"ply.modal"
        };

        if(typeof $.isTouchCapable === "function" && $.isTouchCapable()){
            defaults.closeOnDocumentTap = true;
        }

        var options = $.extend(defaults, params);

        function reposition(e, link, modal){
            link.trigger(options.eventPrefix + ".repositioning",  [e, link, modal]);
            modal.trigger(options.eventPrefix + ".repositioning", [e, link, modal]);

            var pos = options.position;
            if(typeof pos === "function"){
                pos = pos(e, link, modal);
            }
            modal.position(pos);

            link.trigger(options.eventPrefix + ".repositioned",  [e, link, modal]);
            modal.trigger(options.eventPrefix + ".repositioned", [e, link, modal]);
        }

        function open(e, link, modal){
            link.trigger(options.eventPrefix + ".opening", [e, link, modal]);
            modal.trigger(options.eventPrefix + ".opening", [e, link, modal]);

            if(options.opener){
                options.opener(options, e, link, modal);
            } else {
                link.addClass(options.modalLinkActiveClass);
                modal.addClass(options.modalActiveClass);
            }

            if(options.position){
                reposition(e, link, modal);
            }

            link.trigger(options.eventPrefix + ".opened", [e, link, modal]);
            modal.trigger(options.eventPrefix + ".opened", [e, link, modal]);
        }

        function close(e, link, modal){
            link.trigger(options.eventPrefix + ".closing",  [e, link, modal]);
            modal.trigger(options.eventPrefix + ".closing", [e, link, modal]);

            if(options.closer){
                options.closer(options, e, link, modal);
            } else {
                link.removeClass(options.modalLinkActiveClass);
                modal.removeClass(options.modalActiveClass);
            }
            
            link.trigger(options.eventPrefix + ".closed",  [e, link, modal]);
            modal.trigger(options.eventPrefix + ".closed", [e, link, modal]);
        }

        return $(this).each(function(){
            var link = $(this);
            var modal = $(options.modalSelector, link);

            if(options.modalSelectorUseFuzzy){
                modal = link.fuzzy(options.modalSelector);
            }

            // reparent if needed
            if(options.reparent){
                $(options.reparent).append(modal);
            }

            // if close on escape
            if(options.closeOnEscape){
                $(document).on("ply.escape", function(e){
                    modal.trigger(options.eventPrefix + ".close", e);
                });
            }

            // if close selector
            if(options.closeSelector){
                $(options.closeSelector, modal).click(function(e){
                    if(e && options.modalClosePreventDefault){
                        e.preventDefault();
                    }

                    modal.trigger(options.eventPrefix + ".close", e);
                });
            }

            // if close on click
            if(options.closeOnDocumentClick){
                // listen for clicks anywhere in the document.
                $(document).on("click", function(e){
                    modal.trigger(options.eventPrefix + ".close", e);
                });

                // but, don't allow clicks in the modal to propagate outside the modal
                // as that would inadvertently close the modal
                modal.on("click", function(e){ 
                    if(e){
                        e.stopPropagation();
                    }
                });
            }

            // if close on tap
            if(options.closeOnDocumentTap){
                // don't allow taps in the link to propagate outside the link
                // as that would inadvertently close the modal
                link.on("tap", function(e){ 
                    if(e){
                        e.originalEvent.stopPropagation();
                    }
                });

                // don't allow clicks in the modal to propagate outside the modal
                // as that would inadvertently close the modal
                modal.on("tap", function(e){ 
                    if(e){
                        e.originalEvent.stopPropagation();
                    }
                });

                // listen for clicks anywhere in the document.
                $(document).on("singletap", function(e){
                    modal.trigger(options.eventPrefix + ".close", e);
                });
            }

            // if reposition on resize
            if(options.repositionOnResize){
                var timeout = null;

                var triggerReposition = function(){
                    modal.trigger(options.eventPrefix + ".reposition");
                };

                var handleResize = function(){
                    if(timeout){
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    setTimeout(triggerReposition, options.repositionOnResizeTimeout);
                };

                modal.on(options.eventPrefix + ".opened", function(){
                    $(window).on("resize", handleResize);
                });

                modal.on(options.eventPrefix + ".closed", function(){
                    $(window).off("resize", handleResize);
                });
            }

            // if hover instead of click
            if(options.openOnMouseOver){

                var hoverTimeout = null;
                var exitTimeout = null;

                link.on({
                    mouseenter:function(e){
                        if(hoverTimeout){
                            clearTimeout(hoverTimeout);
                            hoverTimeout = null;
                        }
                        $(document).trigger(options.eventPrefix + ".close-all");
                        hoverTimeout = setTimeout(function(){
                            modal.trigger(options.eventPrefix + ".open");
                            hoverTimeout = null;
                        }, 150);
                    }, 
                    mouseleave:function(e){
                        if(hoverTimeout){
                            clearTimeout(hoverTimeout);
                            hoverTimeout = null;
                        }
                        exitTimeout = setTimeout(function(){
                            modal.trigger(options.eventPrefix + ".close");
                            exitTimeout = null;
                        }, 250);
                    }
                });

                modal.on({
                    mouseenter:function(e){
                        if(exitTimeout){
                            clearTimeout(exitTimeout);
                            exitTimeout = null;
                        }
                    },
                    mouseleave:function(e){
                        if(exitTimeout){
                            clearTimeout(exitTimeout);
                            exitTimeout = null;
                        }
                        exitTimeout = setTimeout(function(){
                            modal.trigger(options.eventPrefix + ".close");
                            exitTimeout = null;
                        }, 150);
                    }
                });

            }
            
            if(!options.openOnMouseOver || options.openOnMouseClick){
                // bind the event handler for the links
                link.click(function(e){
                    if(e && options.modalLinkPreventDefault){
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    if(modal.hasClass(options.modalActiveClass)){
                        modal.trigger(options.eventPrefix + ".close", e);
                    } else {
                        modal.trigger(options.eventPrefix + ".open", e);
                    }
                });
            }

            // listen for a close all event
            $(document).on(options.eventPrefix + ".close-all", function(e){
                modal.trigger(options.eventPrefix + ".close", e);
            });
            
            modal.on(options.eventPrefix + ".open", function(e){
                open(e, link, modal);
            });

            modal.on(options.eventPrefix + ".close", function(e){
                close(e, link, modal);
            });

            modal.on(options.eventPrefix + ".reposition", function(e){
                reposition(e, link, modal);
            });

            var exports = {
                "m":modal,
                "l":link
            };

            link.data("modal", exports);
            modal.data("modal", exports);
        });
    };


    function positionModalForFloatingLinks(e, link, modal){
        var floatingLinks = $(".ply-floating-links");

        var animateOpen = true;
        var animateClose = true;

        modal.css("position", "fixed");

        modal.one("ply.modal.repositioned", function(e, origE, link, modal){
            var width = modal.outerWidth();
            if(animateOpen){
                floatingLinks.animate({"right":width}, "fast");
                modal.animate({"margin-left":-width}, "fast");
            } else {
                floatingLinks.css("right", modal.outerWidth());
                modal.css("margin-left", -modal.outerWidth());
            }
        });
        
        return {
            my:"left middle",
            at:"right middle", 
            of:floatingLinks,
            collision:"none"
        };
    }

    function closeFloatingLinksModal(options, e, link, modal){
        var floatingLinks = $(".ply-floating-links");

        modal.css("position", "fixed");

        floatingLinks.animate({"right":0}, 101, function(){ 
            modal.removeClass(options.modalActiveClass);
            link.removeClass(options.modalLinkActiveClass);
        });

        modal.animate({"margin-left":0}, 100);
    }


    /**
     * Modal for global chat
     **/
    $.fn.chatModal = function(params){
        var defaults = {
            modalSelector:$(".ply-global-chat-modal"),
            modalLinkActiveClass:"ply-global-chat-link-active",
            modalActiveClass:"ply-global-chat-modal-active",
            position:function(e, link, modal){
                if(link.parents(".ply-floating-links").length > 0){
                    return positionModalForFloatingLinks(e, link, modal);
                } else if(link.parents("footer").length === 0){
                    return {
                        my:"right top",
                        at:"left bottom", 
                        of:link,
                        collision:"flipfit"
                    };
                } else {
                    return {
                        my:"left bottom",
                        at:"left top", 
                        of:link,
                        collision:"flipfit",
                        using:function(pos, meta){
                            modal.css({
                                left:pos.left,
                                top:pos.top + meta.element.height + 100
                            });

                            modal.animate({
                                top:pos.top,
                                left:pos.left
                            }, "fast");
                        }
                    };
                }
            },
            repositionOnResize:true,
            reparent:".ply-wrapper"
        };

        var m = $(this).modalize($.extend(defaults, params));

        return m;
    };


    /**
     * Modal for global ctas
     **//*
    $.fn.ctaModal = function(params){
        var defaults = {
            modalSelector:$(".ply-global-cta-modal"),
            modalLinkActiveClass:"ply-global-cta-link-active",
            modalActiveClass:"ply-global-cta-modal-active",
            position:function(e, link, modal){
                if(link.parents(".ply-floating-links").length > 0){
                    return positionModalForFloatingLinks(e, link, modal);
                } else {
                    return {
                        my:"left bottom",
                        at:"left top", 
                        of:link,languageModal
                        collision:"flipfit"
                    };
                }
            },
            repositionOnResize:true,
            reparent:".ply-wrapper"
        };

        var m = $(this).modalize($.extend(defaults, params));

        return m;
    };*/

/**
 * Modal for language selector
 **/
$.fn.productModal = function(params){
    var defaults = {
        modalSelector:$(".global-products-modal"),
        modalLinkActiveClass: "global-products-link-active",
        modalActiveClass: "global-products-modal-active",
        position:function(e, link, modal){
            return {
                my:"right bottom",
                at:"right top-8", 
                of:link,
                collision:"flipfit",
                using:function(pos, meta){
                    modal.css({
                        left:pos.left,
                        top:pos.top + meta.element.height + 100
                    });

                    modal.animate({
                        top:pos.top,
                        left:pos.left
                    }, "fast");
                }
            };
        },
        reparent:".wrapper"
    };

    var m = $(this).modalize($.extend(defaults, params));

    return m;
};


    /**
     * Modal for language selector
     **/
$.fn.languageModal = function (params) {

        var defaults = {
            modalSelector:$(".global-languages-modal"),
            modalLinkActiveClass:"global-languages-link-active",
            modalActiveClass:"global-languages-modal-active",
            position:function(e, link, modal){
                return {
                    my:"right bottom",
                    at:"right top-8", 
                    of:link,
                    collision:"flipfit",
                    using: function (pos, meta) {
                        modal.css({
                            left:pos.left,
                            top:pos.top + meta.element.height + 100
                        });

                        modal.animate({
                            top:pos.top,
                            left:pos.left
                        }, "fast");
                    }
                };
            },
            reparent:".wrapper"
        };

        var m = $(this).modalize($.extend(defaults, params));

        return m;
    };


    /**
     * Modal for submenu navigation
     **/
    $.fn.submenuModal = function(params){
        var defaults = {
            modalSelector:"+ .ply-global-submenu-modal",
            modalLinkActiveClass:"ply-global-submenu-link-active",
            modalActiveClass:"ply-global-submenu-modal-active",
            openOnMouseOver:true,
            openOnMouseClick:false,
            position:function(e, link, modal){
                return {
                    my:"left top",
                    at:"left bottom", 
                    of:link.parents("ul").first().find("li").first(),
                    collision:"none",
                    using:function(pos){
                        var wrapper = $(".ply-wrapper");
                        var header = $(".ply-global-header");
                        var headerHeight = header.height();
                        var headerRight = wrapper.width() - (header.width() + header.position().left);

                        modal.css({
                            top:Math.max(pos.top, headerHeight),
                            left:pos.left,
                            right:headerRight
                        });
                    }
                };
            },
            reparent:".ply-wrapper"
        };

        var options = $.extend(defaults, params);

        var m = $(this).modalize(options);

        var open = 0;
        m.on("ply.modal.opened", function(e, eOrig, link, modal){
            $(".ply-wrapper").addClass("ply-global-header-active");
            open++;
        });

        m.on("ply.modal.closing", function(e, eOrig, link, modal){
            if(modal.hasClass(options.modalActiveClass)){
                open--;
            }
        });

        m.on("ply.modal.closed", function(e, eOrig, link, modal){
            if(open <= 0){
                $(".ply-wrapper").removeClass("ply-global-header-active");
            }
        });

        return m;
    };


    /**
     * Submenu for the footer
     **/
    $.fn.footerSubmenuModal = function(params){
        var footer = $(".ply-global-footer");
        var housekeeping = footer.find(".ply-housekeeping");

        var defaults = {
            openOnMouseOver:true,
            position:function(e, link, modal){
                modal.css("position", "fixed");

                return {
                    my:"left bottom",
                    at:"left-11px top", 
                    of:link.parents("ul").first().find("li:nth-child(2)"),
                    collision:"none",
                    using:function(pos, els){
                        var modalHeight = els.element.height;
                        var footerTop = housekeeping.position().top;
                        var top = Math.min(pos.top, footerTop-modalHeight);
                        var wrapper = $(".ply-wrapper");
                        var footerRight = wrapper.width() - (footer.width() + footer.position().left);

                        modal.css({
                            top:top,
                            left:pos.left,
                            right:footerRight
                        });
                    }
                };
            }
        };

        var options = $.extend(defaults, params);

        var m = $(this).submenuModal(options);

        var opened = 0;

        m.on("ply.modal.opened", function(e, eOrig, link, modal){
            opened++;
            $(".ply-wrapper").addClass("ply-global-footer-active");
        });

        m.on("ply.modal.closed", function(e, eOrig, link, modal){
            opened--;
            if(opened <= 0){
                $(".ply-wrapper").removeClass("ply-global-footer-active");
            }
        });
        
        return m;
    };

    /**
     * Modal for breadcrumb navigation
     **/
    $.fn.breadcrumbModal = function(params){
        var defaults = {
            modalSelector:$(".ply-global-breadcrumb-modal"),
            modalLinkActiveClass:"ply-global-breadcrumb-link-active",
            modalActiveClass:"ply-global-breadcrumb-modal-active",
            openOnMouseOver:true,
            openOnMouseClick:true,
            position:function(e, link, modal){
                return {
                    my:"left top",
                    at:"left-10px bottom", 
                    of:link,
                    collision:"none",
                    using:function(pos){
                        var headerHeight = $(".ply-global-header").height();

                        modal.css({
                            top:Math.max(pos.top, headerHeight),
                            left:pos.left
                        });
                    }
                };
            },
            reparent:".ply-wrapper"
        };

        var options = $.extend(defaults, params);

        var m = $(this).submenuModal(options);

        return m;
    };




    /**
     * Modal for videos
     **/
    $.fn.videoModal = function(params){
        var defaults = {
            modalSelector:".ply-global-video-modal",
            closeSelector:".ply-global-video-close",
            modalLinkActiveClass:"ply-global-video-link-active",
            modalActiveClass:"ply-global-video-modal-active",
            position:function(e, link, modal){
                return {
                    my:"center",
                    at:"center", 
                    of:window,
                    collision:"none"
                };
            },
            modalSelectorUseFuzzy:true,
            repositionOnResize:true,
            reparent:".ply-wrapper",
            maskParent:".ply-wrapper"
        };

        var options = $.extend(defaults, params);

        var m = $(this).modalize(options);

        var mask = $(".ply-modal-mask");
        if(!mask.length){
            mask = $("<div/>", {"class":"ply-modal-mask"});
            mask.appendTo($(options.maskParent));
        }
		
		var lastOpenedVideoId = null;
		var videoModalClone = null;

        m.on("ply.modal.opened", function(e, origE, link, modal){
            modal.find("iframe[data-src]").each(function(){
                var iframe = $(this);
                iframe.attr("src", iframe.data("src")).removeAttr("data-src");
            });
            lastOpenedVideoId = modal.find("object").attr("id");
            videoModalClone = modal.find(".brightcovevideo").clone(true);
            mask.addClass("ply-modal-mask-active ply-modal-mask-dark");
            mask.addClass("ply-modal-mask-active ply-modal-mask-dark");
        });

        m.on("ply.modal.closed", function(e, origE, link, modal){
            modal.find("iframe[src]").each(function(){
                var iframe = $(this);
                iframe.attr("data-src", iframe.attr("src")).removeAttr("src");
            });
            if(link.hasClass("ply-global-video-link") && videoModalClone != null) {
                if(modal.find("object").attr("id") == lastOpenedVideoId) {
                    modal.find(".brightcovevideo").find("object").remove();
                    modal.find(".brightcovevideo").html(videoModalClone.html());
                    brightcove.createExperiences();
                    videoModalClone = null;
                }
            }
            mask.removeClass("ply-modal-mask-active ply-modal-mask-dark");
        });

        return m;
    };

    
    /**
     * Modal for resources lead gen form
     **/
    $.fn.resourceModal = function(params){
        var defaults = {
            modalSelector:"+ .ply-global-resource-modal",
            closeSelector:".ply-global-resource-close",
            modalLinkActiveClass:"ply-global-resource-link-active",
            modalActiveClass:"ply-global-resource-modal-active",
            position:function(e, link, modal){
                return {
                    my:"center",
                    at:"center", 
                    of:window,
                    collision:"none"
                };
            },
            repositionOnResize:true,
            reparent:".ply-wrapper",
            maskParent:".ply-wrapper"
        };

        var options = $.extend(defaults, params);

        var m = $(this).modalize(options);

        var mask = $(".ply-modal-mask");
        if(!mask.length){
            mask = $("<div/>", {"class":"ply-modal-mask"});
            mask.appendTo($(options.maskParent));
        }

        m.on("ply.modal.opened", function(e, origE, link, modal){
            mask.addClass("ply-modal-mask-active ply-modal-mask-dark");
        });

        m.on("ply.modal.closed", function(e, origE, link, modal){
            mask.removeClass("ply-modal-mask-active ply-modal-mask-dark");
        });

        return m;
    };


    /**
     * Modal for global flyouts
     **/
    $.fn.flyoutModal = function(params){
        var defaults = {
            modalSelector:"+ .ply-global-flyout-modal",
            modalLinkActiveClass:"ply-global-flyout-link-active",
            modalActiveClass:"ply-global-flyout-modal-active",
            linkIconClass:"fa-list-alt",
            linkIconActiveClass:"fa-times-circle",
            position:function(e, link, modal){
                return {
                    my:"left top",
                    at:"left bottom", 
                    of:link.first(),
                    collision:"fit",
                    using:function(pos, args){
                        var top = pos.top;
                        if(pos.left < args.target.left + (args.target.width/2)){
                            top = args.target.top + args.target.height;
                        }
                        modal.css({left:pos.left, top:top});
                    }
                };
            },
            eventPrefix:"ply.modal",
            reparent:".ply-wrapper"
        };

        var options = $.extend(defaults, params);

        var m = $(this).modalize(options);

        m.on(options.eventPrefix + ".opened", function(e, origE, link, modal){
           link.find(".fa").removeClass(options.linkIconClass).addClass(options.linkIconActiveClass);
        });

        m.on(options.eventPrefix + ".closed", function(e, origE, link, modal){
            link.find(".fa").removeClass(options.linkIconActiveClass).addClass(options.linkIconClass);
        });

        return m;
    };


    /**
     * Modal for global sharing
     **/
    $.fn.shareModal = function(params){
        var defaults = {
            modalSelector:".ply-global-share-modal",
            modalSelectorUseFuzzy:true,
            modalLinkActiveClass:"ply-global-share-link-active",
            modalActiveClass:"ply-global-share-modal-active",
            linkIconClass:"fa-share-alt",
            linkIconActiveClass:"fa-close",
            position:function(e, link, modal){
                return {
                    my:"left top",
                    at:"left-15px bottom+15px", 
                    of:link.first().find("i"),
                    collision:"none"
                };
            },
            eventPrefix:"ply.modal"
        };

        var options = $.extend(defaults, params);

        var m = $(this).flyoutModal(options);

        m.on(options.eventPrefix + ".opening", function(e, origE, link, modal){
            modal.find(".ply-global-share-icon-print").click(function(e){
                if(e){
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }

                link.parents().addClass("ply-printable");
                window.print();
                link.parents().removeClass("ply-printable");
            });
        });

        return m;
    };


    /**
     * Modal for hotspot flyouts
     **/
    $.fn.hotspotModal = function(params){
        var defaults = {
            modalSelector:"+ .ply-global-hotspot-modal",
            modalLinkActiveClass:"ply-global-hotspot-link-active",
            modalActiveClass:"ply-global-hotspot-modal-active",
            linkIconClass:"fa-close",
            linkIconActiveClass:"fa-close",
            position:function(e, link, modal){
                return {
                    my:"left top",
                    at:"right-5 top+5", 
                    of:link.first(),
                    collision:"fit",
                    using:function(pos, args){
                        var top = pos.top;
                        if(pos.left < args.target.left + (args.target.width/2)){
                            top = args.target.top + args.target.height;
                        }
                        modal.css({left:pos.left, top:top});
                    }
                };
            },
            eventPrefix:"ply.modal"
        };

        var options = $.extend(defaults, params);

        var m = $(this).flyoutModal(options);

        return m;
    };


    /**
     * Modal for mobile menu flyouts
     **/
    $.fn.mobileMenuModal = function(params){
        var defaults = {
            modalSelector:".ply-global-header-nav-main",
            modalLinkActiveClass:"ply-global-header-nav-main-responsive-active",
            modalActiveClass:"ply-global-header-nav-main-responsive-modal-active",
            linkIconClass:"fa-bars",
            linkIconActiveClass:"fa-close",
            position:function(e, link, modal){
                return {
                    my:"left top",
                    at:"left bottom", 
                    of:$(".ply-global-header"),
                    collision:"fit"
                };
            },
            reparent:".ply-wrapper",
            eventPrefix:"ply.modal"
        };

        var options = $.extend(defaults, params);

        var reparent = $(options.reparent); 
        var modalOrig = $(options.modalSelector);
        var modalCloned = modalOrig.clone();
        modalCloned.appendTo(reparent).addClass("ply-global-header-nav-main-responsive-modal");
        options.modalSelector = modalCloned;

        // remove pins
        modalCloned.find(".ply-pins").remove();

        // fixup submenu links
        modalCloned.find(".ply-global-submenu-link").removeClass("ply-global-submenu-link");

        modalCloned.find(".ply-global-submenu-modal").each(function(){
            var div = $(this);
            var a = div.prev("a");

            a.click(function(e){
                var active = div.hasClass("ply-global-submenu-modal-link-active");

                $(".ply-global-submenu-modal-link-active").removeClass("ply-global-submenu-modal-link-active");

                if(!active){
                    e.preventDefault();
                    modalCloned.addClass("ply-global-submenu-modal-link-active");
                    div.addClass("ply-global-submenu-modal-link-active");
                    a.parents("li").first().addClass("ply-global-submenu-modal-link-active");
                    a.addClass("ply-global-submenu-modal-link-active");
                }

                var i = a.find("> i");
                if(i && i.length){
                    i.remove();
                } else {
                    i = $("<i/>", {"class":"fa fa-angle-left"});
                    a.prepend(i);
                }
            });

        });
        

        var m = $(this).flyoutModal(options);

        m.on("ply.modal.opened", function(e, eOrig, link, modal){
            $(".ply-wrapper").addClass("ply-global-header-active");
        });

        m.on("ply.modal.closed", function(e, eOrig, link, modal){
            $(".ply-wrapper").removeClass("ply-global-header-active");
        });

        $(".ply-global-footer-nav-responsive .ply-global-menu-link").click(function(e){
            if(e){
                e.preventDefault();
                e.stopPropagation();
            }
            modalCloned.trigger("ply.modal.open");
        });

        return m;
    };


    $(function(){
        var wrapper = $(".ply-wrapper");

        // NOTE: mobile menu modal needs to be invoked before the submenu modals
        $(".ply-global-header-nav-main-responsive a").mobileMenuModal();
        $(".ply-global-header .ply-global-submenu-link").submenuModal();
        $(".ply-global-footer .ply-global-submenu-link").footerSubmenuModal();

        $(".ply-global-flyout-link").flyoutModal();
        $(".ply-global-hotspot-link").hotspotModal();
        $(".ply-global-share-link").shareModal();
$(".global-footer-language-link").languageModal();
$(".global-footer-products-link").productModal();

        $(".ply-global-breadcrumb-link").breadcrumbModal();
        $(".ply-global-video-link").videoModal();
        $(".ply-global-resource-link").resourceModal();

        // move floating links to the bottom of the page
        $(".ply-floating-links").appendTo(wrapper);

        // footer chat modal
        $("footer .ply-global-chat-link").chatModal({
            modalSelector:$(".ply-global-chat-modal:not(.ply-global-chat-modal-floating)")
        });

        // floating chat modal
        $(".ply-floating-links .ply-global-chat-link").chatModal({
            modalSelector:$(".ply-global-chat-modal-floating"), 
            closer:closeFloatingLinksModal
        });

        // footer cta modal
        $("footer .ply-global-cta-link").ctaModal({
            modalSelector:$(".ply-global-cta-modal:not(.ply-global-cta-modal-floating)")
        });

        // floating cta modal
        $(".ply-floating-links .ply-global-cta-link").ctaModal({
            modalSelector:$(".ply-global-cta-modal-floating"), 
            closer:closeFloatingLinksModal
        });



    });

}(window.jQuery));