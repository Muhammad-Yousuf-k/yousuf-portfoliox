
import DataProvider from "./DataProvider.jsx";

const AppProviders = ({ children }) => (
  <DataProvider>
    {children}
  </DataProvider>
);

export default AppProviders;
