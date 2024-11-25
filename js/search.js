/** @format */

const docsTopics = [
    {
        title: "Requirements",
        url: "#requirements",
    },
    {
        title: "What's Included",
        url: "#whats_included",
    },
    {
        title: "Gateways",
        url: "#payment_gateways",
    },
    {
        title: "Stripe",
        url: "#stripe_gateway",
    },
    {
        title: "PayPal",
        url: "#paypal_gateway",
    },
    {
        title: "Paystack",
        url: "#paystack_gateway",
    },
    {
        title: "Flutterwave",
        url: "#flutterwave_gateway",
    },
    {
        title: "Mollie",
        url: "#mollie_gateway",
    },
    {
        title: "Skrill",
        url: "#gateway_skrill"
    },
    {
        title: "Braintree",
        url: "#gateway_braintree"
    },
    {
        title: "Installation Local Machine (Windows)",
        url: "#local_machine_setup_windows",
    },
    {
        title: "Installation Local Machine (Linux)",
        url: "#local_machine_setup_linux",
    },
    {
        title: "Installation Local Machine (Mac)",
        url: "#local_machine_setup_mac",
    },
    {
        title: "Installation VPS (Automated)",
        url: "#vps_setup_automated",
    },
    {
        title: "Installation VPS (Manual)",
        url: "#vps_setup_manual",
    },
    {
        title: "Installation VPS (Git)",
        url: "#vps_setup_git",
    },
    {
        title: "Installation Cpanel Setup",
        url: "#cpannel_setup",
    },
    {
        title: "Installation Varcel Setup",
        url: "#varcel",
    },
    {
        title: "Dashboard",
        url: "#dashboard",
    },
    {
        title: "Prize Category",
        url: "#prize_category",
    },
    {
        title: "Prize",
        url: "#prize",
    },
    {
        title: "New Lottery",
        url: "#new_lottery",
    },
    {
        title: "All Lottery",
        url: "#all_lottery",
    },
    {
        title: "Winner",
        url: "#winner",
    },
    {
        title: "Manual Draw",
        url: "#manual_draw",
    },
    {
        title: "Blog Category",
        url: "#blog_category",
    },
    {
        title: "Blog Tag",
        url: "#blog_tag",
    },
    {
        title: "Blog",
        url: "#blog",
    },
    {
        title: "Subscriber",
        url: "#subscriber",
    },
    {
        title: "Contact",
        url: "#contact",
    },
    {
        title: "Deposit Request",
        url: "#deposit_requests",
    },
    {
        title: "Deposit Approvals",
        url: "#deposit_approvals",
    },
    {
        title: "Deposit Rejections",
        url: "#deposit_rejections",
    },
    {
        title: "Deposit All",
        url: "#deposit_all",
    },
    {
        title: "Withdraw Request",
        url: "#withdraw_requests",
    },
    {
        title: "Withdraw Approvals",
        url: "#withdraw_approvals",
    },
    {
        title: "Withdraw Rejections",
        url: "#withdraw_rejections",
    },
    {
        title: "Withdraw All",
        url: "#withdraw_all",
    },
    {
        title: "FAQ Category",
        url: "#faq_category",
    },
    {
        title: "FAQ",
        url: "#faq",
    },
    {
        title: "Support Ticket",
        url: "#support_ticket",
    },
    {
        title: "Users",
        url: "#users",
    },
    {
        title: "Send Notification",
        url: "#send_notification",
    },
    {
        title: "Admin Management",
        url: "#admin_management",
    },
    {
        title: "Admin Role",
        url: "#admin_role",
    },
    {
        title: "Admins",
        url: "#admins",
    },
    {
        title: "Reports",
        url: "#reports",
    },
    {
        title: "Lottery Report",
        url: "#lottery_report",
    },
    {
        title: "Ticket Report",
        url: "#ticket_report",
    },
    {
        title: "Commission Report",
        url: "#commission_report",
    },
    {
        title: "Login Log Report",
        url: "#login_log_report",
    },
    {
        title: "Settings",
        url: "#settings",
    },
    {
        title: "App Settings",
        url: "#app_settings",
    },
    {
        title: "System Configuration",
        url: "#system_configuration",
    },
    {
        title: "SEO Settings",
        url: "#seo_settings",
    },
    {
        title: "Currencies",
        url: "#currencies",
    },
    {
        title: "Withdraw Method",
        url: "#withraw_method",
    },
    {
        title: "Payment Method",
        url: "#payemnt_method",
    },
    {
        title: "Languages",
        url: "#languages",
    },
    {
        title: "Notification Settings",
        url: "#notification_settings",
    },
    {
        title: "Notification Template",
        url: "#notification_template",
    },
    {
        title: "Email Notification",
        url: "#email_notification",
    },
    {
        title: "SMS Notification",
        url: "#sms_notification",
    },
    {
        title: "RealTime Notification Popup",
        url: "#realtime_notification",
    },
    {
        title: "Frontend Pages",
        url: "#frontend_pages",
    },
    {
        title: "Referral Program",
        url: "#referral_program",
    },
    {
        title: "Extensions",
        url: "#extensions",
    },
    {
        title: "Social Login",
        url: "#social_login",
    },
    {
        title: "Social Links",
        url: "#social_links",
    },
    {
        title: "Cron Jobs",
        url: "#cron_jobs",
    },
    {
        title: "Cookies Policy",
        url: "#cookies_policy",
    },
    {
        title: "Additional Pages",
        url: "#additional",
    },
    {
        title: "Cache",
        url: "#additional_cache",
    },
    {
        title: "Server",
        url: "#additional_server",
    },
    {
        title: "Cache Server Setup",
        url: "#cache_server",
    },
    {
        title: "Octane Server Setup",
        url: "#octane_server",
    },
    {
        title: "CI/CD with GitHub Actions and Laravel Envoy",
        url: "#ci_cd_deployment",
    },
    {
        title: "Folder Structure",
        url: "#folder_structure",
    },
];

const suggestionsList = document.getElementById("suggestions-list");

function showSuggestions(query) {
    // Clear previous suggestions
    suggestionsList.innerHTML = "";

    if (query.trim() === "") return;

    // Filter topics based on the query
    const filteredTopics = docsTopics.filter((topic) => topic.title.toLowerCase().includes(query.toLowerCase()));

    // Display suggestions
    filteredTopics.forEach((topic) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = topic.title;

        // Add click functionality to populate the input
        suggestionItem.addEventListener("click", () => {
            document.getElementById("search-input").value = topic.title;
            suggestionsList.innerHTML = ""; // Clear suggestions
            window.location.href = topic.url;
        });

        suggestionsList.appendChild(suggestionItem);
    });
}
