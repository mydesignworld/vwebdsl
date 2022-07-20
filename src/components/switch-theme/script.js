/* istanbul ignore file */
export default {
  name  : 'switch-theme',
  props : {
      defaultTheme : {
          default : 'adhara',
          type    : String
      },
      themeList    : {
          default : [ 'adhara', 'bluebank', 'pinkbank', 'blackbank' ],
          type    : Array
      }
  },
  /**
   * @override
   */
  data    : () => ({ theme : '' }),
  methods : {
      /**
       * Resolves if theme can be selected or not
       * @param   {String}    theme   Selected theme
       * @return  {Boolean}   `ture` if theme is supported, `false` in other case
       * @private
       */
      _isSupported(theme = '')
      {
          return this.themeList.includes(theme);
      },
      /**
       * Callback executed after theme has been loaded
       * @param   {String}    theme   Loaded theme
       * @private
       */
      _onThemeLoad(theme = '')
      {
          const htmlElement = document.documentElement;

          document.getElementById(theme).classList.remove('active');

          htmlElement.setAttribute('theme', theme);
          localStorage.setItem('theme', theme);
          this.theme = theme;

          document.getElementById(theme).classList.add('active');
          document.body.classList.remove('app-background');
      },
      /**
       * Loads a new theme into document
       * @param   {String}    theme   Selected theme
       * @private
       */
      _changeTheme(theme = '')
      {
          const link = document.createElement('link');
          link.setAttribute('rel', 'stylesheet');
          link.setAttribute('href', `./themes/${theme}.css`);
          link.addEventListener('load', this._onThemeLoad.bind(this, theme));
          document.head.appendChild(link);
      },
      /**
       * Removes current theme, if found
       * @private
       */
      _removeCurrentTheme()
      {
          const link = Array.from(document.head.querySelectorAll('link'))
              .find(node => node.getAttribute('href') === `./themes/${this.theme}.css`);
          if (link)
          {
              document.head.removeChild(link);
          }
      },
      /**
       * Switches theme
       * @param   {String} theme    Item selected
       */
      _onThemeClick(theme = '')
      {
          document.body.classList.add('app-background');
          if (this._isSupported(theme))
          {
              this._removeCurrentTheme(this.theme);
              this._changeTheme(theme);
          }
          else
          {
              this._removeCurrentTheme(theme);
          }
      }
  },
  /**
   * @override
   */
  mounted()
  {
      const theme = localStorage.getItem('theme');
      if (theme)
      {
          this._onThemeClick(theme);
      }
  }

};
