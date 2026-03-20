import { useParams, Navigate } from "react-router-dom";

import BlurText from "../components/TextAnimation/blurtext";
import SplitText from "../components/TextAnimation/splittext";
import CircularText from "../components/TextAnimation/circulartext";
import introduction from "../components/GettingStarted/introduction";
import docs from "../components/GettingStarted/Documents";
import Button3D from "../components/Buttons/Button3D"
import Button2D from "../components/Buttons/Button2D"
import GradientButton from "../components/Buttons/gradientButton"
import GlassButton from "../components/Buttons/Glass"
import SlidingCard from "../components/Cards/slidingCard"
import Card3D from "../components/Cards/Card3D"
import Card2D from "../components/Cards/Card2D"
import FlipCard from "../components/Cards/flipCard"
import FormStyle from "../components/Forms/formStyle"
import ContactForm from "../components/Forms/ContactForm"
import Input from "../components/Forms/input"
import DatePicker from "../components/Filters/DatePicker"
import FilterDate from "../components/Filters/FilterDate"
import ToastNotification from "../components/FeedbackToastNotification/ToastNotification"
import Navbar from "../components/Layouts/Navbar"
import MobileNavbar from "../components/Layouts/MobileNavbar"
import BottomNavbar from "../components/Layouts/BottomSidebar"
import SidebarDesign from "../components/Layouts/Sidebar"
import SkeletonLoading from "../components/Layouts/SkeletonLoading"

import Layout from "../components/ui/Layout";

const componentMap = {
  blurtext: BlurText,
  splittext: SplitText,
  circulartext: CircularText,

  "3dbutton": Button3D,
  "2dbutton": Button2D,
  gradientbutton: GradientButton,
  glass: GlassButton,

  introduction: introduction,
  docs: docs,

  slidingcard: SlidingCard,
  "3dcard": Card3D,
  "2dcard": Card2D,
  flipcard: FlipCard,

  formstyle: FormStyle,
  contactform: ContactForm,
  input: Input,

  datepicker: DatePicker,
  filterdate: FilterDate,

  toastnotification: ToastNotification,

  navbar: Navbar,
  mobilenavbar: MobileNavbar,
  bottomnavbar: BottomNavbar,
  sidebar: SidebarDesign,
  skeletonloading: SkeletonLoading,
};

export default function Components() {
  const { type } = useParams();

  const SelectedComponent = componentMap[type];

  return (
    <Layout>
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <h1 className="text-white text-xl">Component Not Found</h1>
      )}
    </Layout>
  );
}
