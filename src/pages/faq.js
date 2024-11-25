import Handlebars from "handlebars";
import faqTemplate from "../../partials/faq.hbs?raw";
import faqItemTemplate from "../../partials/faqItem.hbs?raw";

Handlebars.registerPartial("faqItem", faqItemTemplate);

const data = {
  faqs: [
    {
      question: "¿Qué es Amor y Abrigo?",
      answer:
        "Amor y Abrigo es una organización sin fines de lucro dedicada a rescatar y rehabilitar animales abandonados y maltratados. También brindamos educación sobre el cuidado responsable de las mascotas y trabajamos para prevenir el abandono y el maltrato animal.",
    },
    {
      question: "¿Cómo puedo ayudar a Amor y Abrigo?",
      answer:
        "Hay muchas maneras de ayudar a Amor y Abrigo. Puedes donar dinero, adoptar una mascota, voluntario o difundir la palabra sobre nuestro trabajo.",
    },
    {
      question: "¿Cómo puedo adoptar una mascota?",
      answer:
        "Si estás interesado en adoptar una mascota, por favor visita nuestro sitio web y encontrarás nuestras redes sociales.",
    },
    {
      question: "¿Cómo puedo donar dinero a Amor y Abrigo?",
      answer: "Puedes donar dinero en línea o por correo.",
    },
    {
      question: "¿Cómo puedo ser voluntario en Amor y Abrigo?",
      answer:
        "Si estás interesado en ser voluntario, por favor completa nuestro formulario de voluntariado en línea.",
    },
    {
      question:
        "¿Qué artículos tiene Amor y Abrigo sobre el cuidado y la protección de los animales?",
      answer:
        "Amor y Abrigo tiene una variedad de artículos sobre el cuidado y la protección de los animales. Puedes encontrar estos artículos en nuestro sitio web o en nuestras redes sociales.",
    },
  ],
};

const template = Handlebars.compile(faqTemplate);

const renderedHtml = template(data);

document.querySelector("#app").innerHTML = renderedHtml;

document.querySelectorAll(".accordion").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;

    button.classList.toggle("active");

    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      document.querySelectorAll(".panel.active").forEach((openPanel) => {
        openPanel.classList.remove("active");
        openPanel.previousElementSibling.classList.remove("active");
      });

      panel.classList.add("active");
    }
  });
});
