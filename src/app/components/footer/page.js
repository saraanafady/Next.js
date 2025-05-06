export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">My App</h3>
              <p>Providing reliable services since 2023</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p>Email: info@myapp.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  