import CustomInput from './components/CustomInput';
import userCardConstructor from './components/UserCard';
import styles from './styles.scss';

const attributeArray = ['name', 'surname', 'age', 'url'];

window.customElements.define('user-card', userCardConstructor(attributeArray));

const userCard = document.createElement('user-card');

const changeFunction = (property: string, propertyValue: string) => {
  userCard.setAttribute(property, propertyValue);
};

const inputContainer = document.createElement('div');
inputContainer.classList.add(styles.inputBlock__container);

attributeArray.forEach((attribute) => {
  const elem = new CustomInput({
    attribute,
    changeFunction,
    listenerType: attribute === 'url' ? 'change' : 'input',
  });
  inputContainer.append(elem.render());
});

document.body.append(inputContainer);
document.body.append(userCard);
