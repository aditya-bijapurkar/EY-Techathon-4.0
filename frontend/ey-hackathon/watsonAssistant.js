window.watsonAssistantChatOptions = {
    integrationID: "9d5e479b-5ad2-4a75-a276-c715d82d7346", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "cc8c6361-a0e4-4f40-b583-ca6ddd2b465e", // The ID of your service instance.
    onLoad: function (instance) {
        instance.render();
    },
};

setTimeout(function () {
    const t = document.createElement("script");
    t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});
