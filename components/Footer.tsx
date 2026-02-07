export default function Footer() {
  return (
    <footer className="border-t border-gray-900 dark:border-gray-800 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Delight Chirume. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">Computer Engineer | Embedded Systems | Robotics</p>
      </div>
    </footer>
  )
}