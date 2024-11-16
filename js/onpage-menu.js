/** @format */

(function ($) {
    $(document).ready(function () {
        const $window = $(window);
        const $body = $(document.body);
        const $docNav = $(".doc-container").find(".doc-nav");
        const $docSections = $(".doc-section");

        // Initialize scrollspy
        $body.scrollspy({
            target: ".doc-sidebar",
        });

        // Add progress bar before navigation links
        $docNav.find("> li > a").before($('<span class="docs-progress-bar" />'));

        // Cache offset top of the navigation bar
        const navOffsetTop = $docNav.offset().top;

        $window.on("scroll", function () {
            const scrollTop = $window.scrollTop();
            const windowHeight = $window.innerHeight();

            $docSections.each(function (index) {
                const $section = $(this);
                const sectionTop = $section.offset().top;
                const sectionHeight = $section.height();
                const sectionBottom = sectionTop + sectionHeight;

                let progress = 0;

                // Calculate progress for the current section
                if (scrollTop >= sectionTop && scrollTop <= sectionBottom) {
                    progress = ((scrollTop - sectionTop) / sectionHeight) * 100;
                    if (progress > 100) progress = 100;
                } else if (scrollTop > sectionBottom || sectionBottom < scrollTop + windowHeight - 70) {
                    progress = 100;
                }

                // Update progress bar
                const $progressBar = $docNav.find(`.docs-progress-bar:eq(${index})`);
                $progressBar.css("width", `${progress}%`);

                // Mark sections as viewed
                if (scrollTop >= sectionBottom) {
                    $progressBar.parent().addClass("viewed");
                }
            });
        });
    });

    // Extend jQuery to trigger custom event on class change
    const originalAddClass = $.fn.addClass;
    $.fn.addClass = function (...args) {
        const result = originalAddClass.apply(this, args);
        this.trigger("cssClassChanged");
        return result;
    };

    // Update active class in navigation
    $(window).on("scroll", function () {
        $(".doc-nav .nav-link").on("cssClassChanged", function () {
            $(".doc-nav .nav-item").removeClass("active");
            $(".dropdown_nav li").parent().closest("li").removeClass("active");

            const $currentItem = $(this).parent();
            $currentItem.addClass("active");

            const $parentDropdown = $currentItem.closest(".dropdown_nav li.active");
            if ($parentDropdown.length) {
                $parentDropdown.parent().closest("li").addClass("active");
            }
        });
    });
})(jQuery);
