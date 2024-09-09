const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wide">CRM Statistics</h1>
          </div>
        </header>
  
        <main className="container mx-auto p-6 mt-20 flex-1">
          {children}
        </main>
  
        <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
          <p className="text-sm">© 2024 CRM Dashboard. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Layout;
  