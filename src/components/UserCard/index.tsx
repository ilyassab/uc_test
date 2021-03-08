import React from 'react';
import ReactDOM from 'react-dom';
import UserCardContent from '../UserCardContent';
import styles from './styles';

function userCardConstructor(attributeArray: string[]) {
  return class UserCard extends HTMLElement {
    mountPoint: HTMLElement | undefined;

    connectedCallback() {
      const shadowRootStyles = `<style>
          ${styles}
        }
      </style>`;
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = shadowRootStyles;
      this.mountPoint = document.createElement('div');
      this.mountPoint.classList.add('user-card__container');
      shadowRoot.appendChild(this.mountPoint);
      this.renderContent();
    }

    renderContent() {
      if (this.mountPoint) {
        ReactDOM.render(
          <UserCardContent
            name={this.getAttribute('name')}
            surname={this.getAttribute('surname')}
            age={this.getAttribute('age')}
            url={this.getAttribute('url')}
          />, this.mountPoint,
        );
      }
    }

    static get observedAttributes() {
      return attributeArray;
    }

    attributeChangedCallback() {
      this.renderContent();
    }
  };
}

export default userCardConstructor;
