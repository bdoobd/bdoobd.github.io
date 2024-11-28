import * as model from "./model.js";
import HeaderView from "./views/headerView.js";
import ContactView from "./views/contactView.js";
import ProfileView from "./views/profileView.js";
import EducationView from "./views/educationView.js";
import SkillsView from "./views/skillsView.js";
import LanguageView from "./views/languageView.js";
import WorkView from "./views/workView.js";

const getLanguagePreferences = () => localStorage.getItem("language") || "fi";

const changeLanguageHandler = async function (event) {
  if (event.target.nodeName === "SPAN") {
    const data = await model.getData(event.target.className);

    localStorage.setItem("language", event.target.className);

    run(data);
  }
};

const run = function (data) {
  HeaderView.render(data.header);
  HeaderView.addLanguageHandler(changeLanguageHandler);
  ContactView.render(data.contact);
  ProfileView.render(data.profile);
  EducationView.render(data.education);
  SkillsView.render(data.skills);
  LanguageView.render(data.languages);
  WorkView.render(data.work);
};

const init = async function () {
  const data = await model.getData(getLanguagePreferences());
  run(data);
};

init();
