import * as model from "./model.js";
import HeaderView from "./views/headerView.js";
import ContactView from "./views/contactView.js";
import ProfileView from "./views/profileView.js";
import EducationView from "./views/educationView.js";
import SkillsView from "./views/skillsView.js";
import LanguageView from "./views/languageView.js";
import WorkView from "./views/workView.js";

const getLanguagePreferences = () => localStorage.getItem("language") || "fi";

const showEducationsHandler = function () {
  const data = "";
};

const init = async function () {
  const data = await model.getData(getLanguagePreferences());
  console.log(data);
  HeaderView.render(data.header);
  ContactView.render(data.contact);
  ProfileView.render(data.profile);
  EducationView.renderBlock(data.education);
  SkillsView.renderBlock(data.skills);
  LanguageView.renderBlock(data.languages);
  WorkView.renderBlock(data.work);
};

init();
