import styles from './styles.scss';

interface Props {
  attribute: string,
  changeFunction: (arg0: string, arg1: string) => void,
  listenerType?: 'change' | 'input',
  attributeValue?: string,
}

class CustomInput {
  attribute: string;

  attributeValue: string;

  listenerType: string;

  changeFunction: (arg0: string, arg1: string) => void;

  elem: HTMLInputElement | undefined;

  constructor(props: Props) {
    this.attribute = props.attribute;
    this.attributeValue = props.attributeValue || '';
    this.changeFunction = props.changeFunction;
    this.listenerType = props.listenerType || 'input';
    this.addEventListeners = this.addEventListeners.bind(this);
  }

  render() {
    this.elem = document.createElement('input');
    const labelElem = document.createElement('label');
    labelElem.classList.add(styles.customInputLabel);
    labelElem.innerText = `${this.attribute}: `;
    labelElem.appendChild(this.elem);
    this.addEventListeners();
    return labelElem;
  }

  addEventListeners() {
    if (this.elem) {
      this.elem.addEventListener(this.listenerType, () => {
        this.attributeValue = (this.elem && this.elem.value) || '';
        this.changeFunction(this.attribute, this.attributeValue);
      });
    }
  }
}

export default CustomInput;
