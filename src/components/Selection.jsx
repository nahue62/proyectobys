import { useState } from "react";
import Select from "react-select";


export const rol = [
  { label: "Analista Tester Funcional", value: "Analista Tester Funcional" },
  { label: "Administrativo", value: "Administrativo" },
  { label: "Administrador", value: "Administrador" },
  { label: "Analista", value: "Analista" },
  { label: "Analista Funcional", value: "Analista Funcional" },
  { label: "Arquitecto", value: "Arquitecto" },
  { label: "Back Office", value: "Back Office" },
  { label: "Business Analyst", value: "Business Analyst" },
  { label: "Call Taker", value: "Call Taker" },
  { label: "Consultor", value: "Consultor" },
  { label: "Data Entry", value: "Data Entry" },
  { label: "Desarrollador", value: "Desarrollador" },
  { label: "Diseñaron UX/UI", value: "Diseñaron UX/UI" },
  { label: "Especialista", value: "Especialista" },
  { label: "Ingeniero", value: "Ingeniero" },
  { label: "Lider Tecnico", value: "Lider Tecnico" },
  { label: "Operador", value: "Operador" },
  { label: "Project Manager", value: "Project Manager" },
  { label: "Scrum Master", value: "Scrum Master" },
  { label: "Soporte", value: "Soporte" },
  { label: "Tester", value: "Tester" },
  { label: "Incident Manager", value: "Incident Manager" },
  { label: "Diseñador", value: "Diseñador" },
  { label: "QA Tester", value: "QA Tester" },
  { label: "Ciberseguridad", value: "Ciberseguridad" },
  { label: "Tester Automation", value: "Tester Automation" },
  { label: "QA Agile", value: "QA Agile" },
  { label: "Diseñador Grafico", value: "Diseñador Grafico" },
];


const skills = [
  { label: "Agile", value: "Agile" },
  { label: "Android", value: "Android" },
  { label: "Angular", value: "Angular" },
  { label: "AS400", value: "AS400" },
  { label: "AWS Re start", value: "AWS Re start" },
  { label: "Base 24", value: "Base 24" },
  { label: "Blueprints", value: "Blueprints" },
  { label: "C", value: "C" },
  { label: "C#", value: "C#" },
  { label: "CICS", value: "CICS" },
  { label: "Cobol", value: "Cobol" },
  { label: "Cobol AS400", value: "Cobol AS400" },
  { label: "DevOps", value: "DevOps" },
  { label: "Digital Assistance", value: "Digital Assistance" },
  { label: "Flutter", value: "Flutter" },
  { label: "Genesys IVR", value: "Genesys IVR" },
  { label: "Governance", value: "Governance" },
  { label: "HCM Oracle", value: "HCM Oracle" },
  { label: "IBM Watson", value: "IBM Watson" },
  { label: "IOS", value: "IOS" },
  { label: "IPO", value: "IPO" },
  { label: "IT Risk", value: "IT Risk" },
  { label: "Java", value: "Java" },
  { label: "Javascript", value: "Javascript" },
  { label: "Linux", value: "Linux" },
  { label: "MDA", value: "MDA" },
  { label: "Microsoft", value: "Microsoft" },
  { label: "Mobile", value: "Mobile" },
  { label: "Monitoreo de Canales", value: "Monitoreo de Canales" },
  { label: "NOC", value: "NOC" },
  { label: "Node.js", value: "Node.js" },
  { label: "On Site", value: "On Site" },
  { label: "PHP", value: "PHP" },
  { label: "Python", value: "Python" },
  { label: "QA", value: "QA" },
  { label: "React", value: "React" },
  { label: "Remedy", value: "Remedy" },
  { label: "RPA", value: "RPA" },
  { label: "RPG AS400", value: "RPG AS400" },
  { label: "SAP", value: "SAP" },
  { label: "Seguridad Informatica", value: "Seguridad Informatica" },
  { label: "Selenium", value: "Selenium" },
  { label: "SQL", value: "SQL" },
  { label: "SRE", value: "SRE" },
  { label: "Unity", value: "Unity" },
  { label: "Visual Basic", value: "Visual Basic" },
  { label: "Vue.js", value: "Vue.js" },
  { label: "Xamarin", value: "Xamarin" },
  { label: "Z/OS", value: "Z/OS" },
  { label: "Infraestructura", value: "Infraestructura" },
  { label: "Drupal", value: "Drupal" },
  { label: "PeopleSoft", value: "PeopleSoft" },
  { label: "Open Banking", value: "Open Banking" },
  { label: "Full Stack", value: "Full Stack" },
  { label: "SysAdmin", value: "SysAdmin" },
  { label: "POS", value: "POS" },
  { label: "Microestrategy", value: "Microestrategy" },
  { label: "Plataformas Virtuales", value: "Plataformas Virtuales" },
  { label: "Idioma Chino", value: "Idioma Chino" },
  { label: "Plataformas", value: "Plataformas" },
  { label: "SQL Server 2016", value: "SQL Server 2016" },
  { label: "Cloud", value: "Cloud" },
  { label: "Salesforce", value: "Salesforce" },
  { label: "Automation", value: "Automation" },
  { label: "Marketing", value: "Marketing" },
  { label: "IBM Integracion BUS 10", value: "IBM Integracion BUS 10" },
  { label: "Conceptual Analytics", value: "Conceptual Analytics" },
  { label: "API", value: "API" },
  { label: "Tester", value: "Tester" },
  { label: "PL/SQL", value: "PL/SQL" },
  { label: "QA VB", value: "QA VB" },
  { label: "Calipso", value: "Calipso" },
  { label: "Bantotal", value: "Bantotal" },
  { label: "Genexus", value: "Genexus" },
  { label: "C++", value: "C++" },
  { label: "Videoconferencia", value: "Videoconferencia" },
  { label: ".Net Core", value: ".Net Core" },
  { label: "React/NodeJS", value: "React/NodeJS" },
];


const senior = [
  { label: "Trainee", value: "Trainee" },
  { label: "Jr", value: "Jr" },
  { label: "Jr+", value: "Jr+" },
  { label: "Ssr", value: "Ssr" },
  { label: "Ssr+", value: "Ssr+" },
  { label: "Sr", value: "Sr" },
];



const contacto = [
  { label: "Mi Bucle", value: "Mi Bucle" },
  { label: "Linkedin Propio", value: "Linkedin Propio" },
  { label: "In Mail", value: "In Mail" },
  { label: "Instragam", value: "Instragam" },
  { label: "Pagina G&L", value: "Pagina G&L" },
  { label: "Tandil", value: "Tandil" },
  { label: "Email", value: "Email" },
  { label: "WhatsApp", value: "WhatsApp" },
  { label: "WeFoc", value: "WeFoc" },
  { label: "Referido", value: "Referido" },
  { label: "Empujar", value: "Empujar" },
  { label: "Proveedor", value: "Proveedor" },
];




/*
export function SelecSkills() {
  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSupplier(value);
  };

  return (
    <div>
      <Select
        options={skills}
        onChange={handleSelectChange}
        placeholder="Skill"
        className="rounded-lg"
      />
    </div>
  );
}
*/

export function SelecSkills({onModalChange}){
  return (
  <Select
  onChange={onModalChange}
  isMulti
  name="skills"
  options={skills}
  className="basic-multi-select"
  classNamePrefix="select"
  placeholder="Skills"
/>)
}

export function SelecRol() {
  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSupplier(value);
  };

  return (
    <div>
      <Select id= "rol" options={rol} onChange={handleSelectChange} placeholder="Rol" />
    </div>
    
  );
}

export function SelecRolMulti() {
  return (
    <Select
    isMulti
    name="Rol"
    options={rol}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder="Rol"
  />)
}

export function SelecSeniority() {
  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSupplier(value);
  };

  return (
    <div>
      <Select
        options={senior}
        onChange={handleSelectChange}
        placeholder="Seniority"
      />
    </div>
  );
}


export function SelecSeniorityMulti() {
  return (
    <Select
    isMulti
    name="Seniority"
    options={senior}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder="Seniority"
  />)
}

export function Sources() {
  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSupplier(value);
  };

  return (
    <div>
      <Select
        options={contacto}
        onChange={handleSelectChange}
        placeholder="Fuente"
      />
    </div>
  );
}
