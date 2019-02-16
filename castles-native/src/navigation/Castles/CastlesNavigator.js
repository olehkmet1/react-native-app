import {createStackNavigator} from "react-navigation";
import CastlesMain from "../../components/Castles/CastlesMain";
import CastleDetails from "../../components/Castles/Details/CastleDetails";
import SearchScreen from "../../components/Castles/Filtration/SearchScreen";
import FiltersScreen from "../../components/Castles/Filtration/FiltersScreen";

export const CastlesNavigator = createStackNavigator({
    Castles: {
        screen: CastlesMain,
    },
    Details: {
        screen: CastleDetails,
    },
    Search: {
        screen: SearchScreen,
    },
    Filters: {
        screen: FiltersScreen,
    },

});