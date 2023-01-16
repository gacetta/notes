# dealing with time in JS

------------
## date
------------
The function in JS that we use for time is `Date()`.  It requires the `new` keyword when called.

    const now = new Date();
    const timestamp = now.getTime();

    const myDate = new Date(timestamp);
    console.log(myDate.getFullYear());

There are many different methods we can use on `Date()`.  Some of the most useful:
// console.log(`Year ${now.getFullYear()}`);
// console.log(`Month ${now.getMonth()}`);
// console.log(`Day of month ${now.getDate()}`);
// console.log(`Hours ${now.getHours()}`);
// console.log(`Minutes ${now.getMinutes()}`);
// console.log(`Seconds ${now.getSeconds()}`);

------------
## Timestamp
------------
A single number representation of a `Date()` is often called a `timestamp`, which makes date comparison easier.  We can get a numeric representation using `Date().getTime()`

Representing `Date()` as a single number in JS is a reference to the Unix Epoch in milliseconds.
The Unix Epoch is January 1st 1970 00:00:00.  Any time before that will be a negative number and any time after will be positive.

`.getTime()` converts a date to a timestamp, i.e. a number in milliseconds

---------------------
## moment
---------------------
reference: https://momentjs.com/

`Date()` is clunky.  The third party library `moment()` helps address issues.

`moment()` is similar to `date()` with many additional methods available.  
  - `moment().second(Number)` - with an argument, `.second()` or `.seconds()` sets the seconds.  Without an argument, `.second()` returns the value for seconds.
  - `.minute()` or `.minutes()`
  - `.hour()` or `.hours()`
  - `.hour()` or `.hours()`
  - `.date()` or `.dates()`
  - `.week()` or `.weeks()`
  - `.month()` or `.months()`
  - `.year()` or `.years()`

setting a timestamp: `.moment().valueOf()` will output the number of milliseconds since the Unix Epoch just like `Date().getTime()`

---------------------
## intl object 
---------------------
reference: https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore

The `intl` object is the namespace for the ECMASCcript Internationalization API.  It provides language sensitive string comparison, number formatting, and date and time formatting. The Intl object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.

`intl` provides functionality that allows us to avoid moment.js.  Benefits:
- reducing size of JS bundle
- You do not need Moment.js if you support newer browsers and if you show dates or datetimes only in your user’s timezone.
- If your server provides ISO 8601 dates, you are in luck. However, if you are working with dates like 12/1/2019, displaying localized dates and avoiding pitfalls of Javascript’s Date constructor becomes much harder.

`intl` is used in conjunction with `Date()`


### Ordinal Time with toLocaleDateString
`Date().toLocaleDateString(locales, options)` is simplest method to display localized Date string.  It essentially calls `Intl.DateTimeFormat()` (see below)

Most Basic:

    new Date('2019-02-19T06:00:00Z').toLocaleDateString(
      'en-gb'
    ); // 18/02/2019

Human Readable.  Will display resulting date in user's local time:

    new Date('2019-02-19T06:00:00Z').toLocaleDateString(
      'en-gb',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    ); // 18 February 2019

Date independent of timezone:

    new Date('2019-02-19T23:00:00.000000').toLocaleDateString(
      'en-gb',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'utc'
      }
    ); // 20 February, 2019

### native dates with Intl.DateTimeFormat
`Intl.DateTimeFormat(locales, options).format(new Date())` is a constructor that creates `Intl.DateTimeFormat` objects that enable language-sensitive date and time formatting.
- `locales` (optional) - A string with a BCP 47 language tag, or an array of such strings. Possible types of locales: `nu` (numbering system), `ca` (calendar), `hc` (hourcycle)
- `options` (optional) - an object with option properties, e.g. `dateStyle`, `timeStyle`, `calendar`, `timeZone`, `hourCycle`, etc.

Basic implementation:

    Intl.DateTimeFormat(navigator.language, { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date()) // Friday, Dec 27
    Intl.DateTimeFormat('en', { hour: 'numeric' }).format(new Date()) // 2 PM
    Intl.DateTimeFormat('en', { hour: "numeric", minute: "numeric", hour12: true }).format(new Date()) // 2:00 PM

