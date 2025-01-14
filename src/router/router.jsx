import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Help from "../components/Help/Help";
import KeywordShortcuts from "../components/Help/KeywordShortcuts";
import ExportGist from "../components/ExportGist/ExportGist";
import GettingStarted from "../components/GettingStarted/GettingStarted";
import PrivateBin from "../components/Privatebin/PrivateBin";
import VanityUrls from "../components/VanityUrls/VanityUrls";
import Blogs from "../components/Blogs/Blogs";
import SingleBlog from "../components/Blogs/SingleBlog";
import FeatureList from "../components/FeatureList/FeatureList";
import Profeature from "../components/ProFeatures/Profeature";
import HelpPage from "../components/Help/HelpComp";
import RegisterLogin from "../components/Auth/RegisterLogin";
import TermsOfService from "../../TermsOfService";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            }
        ]
    },
    {
        path:'/help',
        element:<Help />,
        children:[
        {
            path:'',
            element:<HelpPage />
        },
        {
            path:'keyboard-shortcuts',
            element:<KeywordShortcuts />
        },
        {
            path:'export-gist',
            element:<ExportGist />
        },
        {
            path:'getting-started',
            element:<GettingStarted />
        },
        {
            path:'private-bins',
            element:<PrivateBin />
        },
        {
            path:'vanity-urls',
            element:<VanityUrls />
        },
        {
            path:'blog',
            element:<Blogs />
        },
        {
            path:'singleBlog/:id',
            element:<SingleBlog />
        },
        {
            path:'featurelist',
            element:<FeatureList />
        },
        {
            path:'profeature',
            element:<Profeature />
        },
        {
            path:'legals',
            element:<TermsOfService />
        }
       ]
    },
    {
        path:'/login',
        element:<RegisterLogin />
    },
    {
        path:'/register',
        element:<RegisterLogin />
    }
])


export default router; 