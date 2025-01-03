# Lemmy-Language-Memorizer
This add-on is made to remember your last post language on Lemmy, so you can avoid taking time to scroll through the language list!

<a href="https://addons.mozilla.org/addon/lemmy-language-memorizer/"><img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="drawing" width="200"/></a>

Right now, it supports the 600 biggest Lemmy instances. If you want it to work for your instance, you can [create an issue](https://github.com/helloyanis/Lemmy-Language-Memorizer/issues)!

Fully free, open-source! Install it and it will automatically work in the background.

# How to use

1. Install the add-on!
2. In your **Lemmy user settings**, select all the languages you'd like to post in. You can use CTRL+Click to select multiple languages.
3. Keep in mind that for any language you **do not** select in that menu, you will **not** be able to see posts in that language. That's how Lemmy works, I think it's not really intuitive but I can't change it `ㄟ( ▔, ▔ )ㄏ`
4. In a new post, or a comment, select a language. The add-on will memorize it!
5. Try to go to another place where you would need to select your language from the dropdown menu. It will automatically switch to the memorized one! You can always pick a new one manually, and the add-on will remember that one instead.

## Known issue

The change does not occur if you go directly on the page with the select menu, for example if you enter the URL directly or refresh the page. This add-on detects changes in the DOM, so go to a page in your instance then navigate using the UI to a page with a language select (for example, from homepage to post creation)
