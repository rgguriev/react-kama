import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-kama" />); // create метод библиотеки react-test-renderer. Создаем переменную с проверяемой компонентой, передаем ей пропсы.
    const instance = component.getInstance(); // instance - экземпляр. Т.к компонента классовая, реакт работает с экзмепляром класса.
    expect(instance.state.status).toBe("it-kama"); // ожидаем, что в стейте компоненты будет "it-kama"
  });
  test("after creation span with status should be displayed", () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull(); // ожидается, что в компоненте будет спан (ожидается спан, если его нет, то будет 0 - двойное отрицание)
  });
  test("after creation input should be not displayed", () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;
    expect( () => root.findByType("input")).toThrow(); // проверка с использованием анонимной функции: проверяет, что при рендере нет инпута. Ожидается, что в компоненте будет поиск инпута и (т.к его не найдет) выведет ошибку
  });
  test("after creation span should contained correct status", () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kama"); // ожидается, что внутри спана будет написано "it-kama"(у спана первый дочерний элемент будет "it-kama")
  });
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick(); // кликнули по спану, спан исчез и появился инпут
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-kama"); // ожидается, что у инпута в value будет "it-kama"
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn(); // фейковая функция, которая запоминает какаю-то инфу, например сколько раз мы вызвали функцию
    const component = create(<ProfileStatus status="it-kama" updateStatus={mockCallback} />); // если этот компонент вызовит фейковую функцию, то мы это узнаем
    const instance = component.getInstance(); // дай нам инстанс
    instance.deactivateMode(); // в этом объекте есть метод deactivateEditMode, если он вызовется, то должен вызваться и этот колбэк
    expect(mockCallback.mock.calls.length).toBe(1); // cals - сколько раз мы вызвали функцию mockCallback, ожидаем 1 раз
    });
});