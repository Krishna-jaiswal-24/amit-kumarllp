// data.js
import LegalContract from "../../assets/legal-services/contract.jpg";
import Advice from "../../assets/legal-services/advice.jpg";
import Help from "../../assets/legal-services/help.jpg";
import LoanAgreement from "../../assets/legal-services/loan.jpg";
import Sla from "../../assets/legal-services/sla.jpg";
import Law from "../../assets/legal-services/law.jpg";

const legalData = [
  {
    id: 1,
    title: "Contract Drafting and Review",
    image: LegalContract,
    description: "Expert drafting and thorough review of legal contracts to ensure precision and compliance.",
  },
  {
    id: 2,
    title: "Legal Advice",
    image: Advice,
    description: "Professional legal advice tailored to your specific situation, guiding you through complex legal matters.",
  },
  {
    id: 3,
    title: "Loan Agreements",
    image: LoanAgreement,
    description: "Crafting comprehensive loan agreements with attention to legal nuances for a secure financial arrangement.",
  },
  {
    id: 4,
    title: "Service-Level Agreements",
    image: Sla,
    description: "Establishing clear and effective service-level agreements to formalize business commitments and expectations.",
  },
  {
    id: 5,
    title: "Legal Support",
    image: Help,
    description: "Reliable assistance and support for a range of legal matters, ensuring your peace of mind.",
  },
  {
    id: 6,
    title: "Legal Disputes and Settlements",
    image: Law,
    description: "Navigate legal disputes with confidence. Our team specializes in effective dispute resolution and settlement negotiations, ensuring the best possible outcome for your case.",
  },
];

export default legalData;
