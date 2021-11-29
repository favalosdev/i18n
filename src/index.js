import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

function getMessages(locale) {
    if (language === 'es')
        return localeEsMessages;
    else
        return localeEnMessages;
} 

let language = (navigator.language).split('-')[0];

ReactDOM.render(
    <IntlProvider locale={language} messages={getMessages(language)}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
