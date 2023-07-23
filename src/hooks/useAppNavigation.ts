import { useNavigation } from "@react-navigation/native";
import { ScreensNavigationProp } from "../types/navigation/NavigationProps";


const useAppNavigation = useNavigation<ScreensNavigationProp>

export default useAppNavigation