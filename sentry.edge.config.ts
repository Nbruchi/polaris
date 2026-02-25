import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://1970521020e37b89e075e591cc59e041@o4507102348181504.ingest.de.sentry.io/4510946876588112",
    tracesSampleRate: 1,
    enableLogs: true,
    sendDefaultPii: true,
    integrations: [
        Sentry.vercelAIIntegration(),
        Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
    ],
});
