import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
const { shallow } = require("enzyme");

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )
    
    test('debe de mostrar el componente corractemente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });
    
    test('debe de tener la imagen igual al url y alt ded los porps', () => {
        
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);

    });
    
    test('debe tener animate__flipInX', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__flipInX') ).toBe( true );

    });    
    


})
