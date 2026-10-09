import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TransferScreen from "./screens/TransferScreen";
import TransferReviewScreen from "./screens/TransferReviewScreen";
import TransferSuccessScreen from "./screens/TransferSuccessScreen";
import CardsScreen from "./screens/CardsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import LocationScreen from "./screens/LocationScreen";
import MoreScreen from "./screens/MoreScreen";
import HistoryScreen from "./screens/HistoryScreen";
import SecurityScreen from "./screens/SecurityScreen";
import StatementsScreen from "./screens/StatementsScreen";

interface TransferData {
  recipient: { id: string; name: string; initials: string; account: string };
  amount: string;
  memo: string;
}

export default function App() {
  const [screen, setScreen] = useState("login");
  const [transferData, setTransferData] = useState<TransferData | null>(null);

  function navigate(nextScreen: string, data?: unknown) {
    if ((nextScreen === "transfer-review" || nextScreen === "transfer-success") && data) {
      setTransferData(data as TransferData);
    }
    setScreen(nextScreen);
  }

  return (
    <div className="size-full overflow-hidden flex items-center justify-center bg-black">
      <div className="relative w-full max-w-[430px] h-full overflow-hidden">
        {screen === "login" && <LoginScreen navigate={navigate} />}
        {screen === "home" && <HomeScreen navigate={navigate} />}
        {screen === "profile" && <ProfileScreen navigate={navigate} />}
        {screen === "transfer" && <TransferScreen navigate={navigate} />}
        {screen === "transfer-review" && transferData && (
          <TransferReviewScreen navigate={navigate} data={transferData} />
        )}
        {screen === "transfer-success" && transferData && (
          <TransferSuccessScreen navigate={navigate} data={transferData} />
        )}
        {screen === "cards" && <CardsScreen navigate={navigate} />}
        {screen === "notifications" && <NotificationsScreen navigate={navigate} />}
        {screen === "location" && <LocationScreen navigate={navigate} />}
        {screen === "more" && <MoreScreen navigate={navigate} />}
        {screen === "history" && <HistoryScreen navigate={navigate} />}
        {screen === "security" && <SecurityScreen navigate={navigate} />}
        {screen === "statements" && <StatementsScreen navigate={navigate} />}
      </div>
    </div>
  );
}
