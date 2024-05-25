'use client'

const handleSubmit = (event) => {
  window.open('https://buttondown.email/FefeHern?tag=insights', 'popupwindow')
}

const PlainNewsletterForm = () => {
  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Subscribe to Chat With Me
      </div>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/FefeHern"
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row"
      >
        <div>
          <label htmlFor="bd-email">
            <span className="sr-only">Email Address</span>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="Enter your email"
              className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            />
          </label>
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0">
          <input
            type="submit"
            value="Subscribe"
            className="w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 sm:py-0"
          />
        </div>
      </form>

      <p>
        <a href="https://buttondown.email/refer/FefeHern" target="_blank">
          Powered by Buttondown.
        </a>
      </p>
    </div>
  )
}

export default PlainNewsletterForm
