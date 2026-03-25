import { useParams, Navigate } from "react-router-dom";

import GlassText from "../components/TextAnimation/GlassText";
import SplitText from "../components/TextAnimation/splittext";
import CircularText from "../components/TextAnimation/circulartext";
import Introduction from "../components/GettingStarted/Introduction";
import Documents from "../components/GettingStarted/Documents";
import Button3D from "../components/Buttons/Button3D";
import Button2D from "../components/Buttons/Button2D";
import GradientButton from "../components/Buttons/GradientButton";
import GlassButton from "../components/Buttons/Glass";
import SlidingCard from "../components/Cards/slidingCard";
import Card3D from "../components/Cards/Card3D";
import Card2D from "../components/Cards/Card2D";
import FlipCard from "../components/Cards/flipCard";
import FormStyle from "../components/Forms/formStyle";
import ContactForm from "../components/Forms/ContactForm";
import Input from "../components/Forms/input";
import DatePicker from "../components/Filters/DatePicker";
import FilterDate from "../components/Filters/FilterDate";
import ToastNotification from "../components/FeedbackToastNotification/ToastNotification";
import Navbar from "../components/Layouts/Navbar";
import MobileNavbar from "../components/Layouts/MobileNavbar";
import BottomNavbar from "../components/Layouts/BottomNavbar";
import Sidebar from "../components/Layouts/Sidebar";
import SkeletonLoading from "../components/Utilities/SkeletonLoading";
import Fluid from "../components/BackgroundEffects/Fluid";
import Fireworks from "../components/BackgroundEffects/Fireworks";
import CodingRain from "../components/BackgroundEffects/CodingRain";
import RainEffect from "../components/BackgroundEffects/Rain";
import Cosmic from "../components/BackgroundEffects/Cosmic";
import Space from "../components/BackgroundEffects/Space";
import Stars from "../components/BackgroundEffects/Stars";
import Asteroids from "../components/BackgroundEffects/Asteroids";
import Blocks from "../components/BackgroundEffects/Blocks";
import DayNight from "../components/BackgroundEffects/DayToNight";
import Loop from "../components/BackgroundEffects/Loop";
import DarkMode from "../components/BackgroundEffects/DarkMode";
import LayeredMedia from "../components/Projects/Cards";
import Timeline from "../components/Projects/Timeline";
import AccordionStyle from "../components/Projects/AccordionStyle";
import AnimateCounter from '../components/Utilities/Counter'
import ScrollToTop from '../components/Utilities/ScrollToTop'
import Text3d from '../components/TextAnimation/Text3d';




import Layout from "../components/ui/Layout";

const componentMap = {
  text3d: Text3d,
  glasstext: GlassText,
  splittext: SplitText,
  circulartext: CircularText,

  counter : AnimateCounter,
  scrolltotop: ScrollToTop,

  layeredmedia: LayeredMedia,
  accordionstyle: AccordionStyle,
  timeline: Timeline,

  button3d: Button3D,
  button2d: Button2D,
  buttongradient: GradientButton,
  buttonglass: GlassButton,

  introduction: Introduction,
  docs: Documents,

  cardslide: SlidingCard,
  card3d: Card3D,
  card2d: Card2D,
  cardflip: FlipCard,

  form: FormStyle,
  contactform: ContactForm,
  input: Input,

  datepicker: DatePicker,
  datefilter: FilterDate,

  toastnotification: ToastNotification,

  navbar: Navbar,
  mobilenavbar: MobileNavbar,
  bottomnavbar: BottomNavbar,
  sidebar: Sidebar,
  skeletonloading: SkeletonLoading,

  darkmode: DarkMode,
  fluid: Fluid,
  fireworks: Fireworks,
  codingrain: CodingRain,
  raineffect: RainEffect,
  cosmic: Cosmic,
  space: Space,
  stars: Stars,
  asteroids: Asteroids,
  blocks: Blocks,
  daynight: DayNight,
  loop: Loop,
};

export default function Components() {
  const { type } = useParams();
  if (!type) {
    return <Navigate to="/GettingStarted/introduction" />;
  }
  const SelectedComponent = componentMap[type];

  return (
    <Layout>
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <h1 className="text-white text-xl">Component Not Found: {type}</h1>
      )}
    </Layout>
  );
}
