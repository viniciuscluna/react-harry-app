import { render, screen } from '@testing-library/react'
import Index from './index'
import '@testing-library/jest-dom'
import ImageType from '../types/imageType'

describe('Home', () => {
    it('renders a h2', () => {
        const imageList: ImageType[] = [];
        render(<Index imageList={imageList} />);

        const h2 = screen.getByText('Reri porte');

        expect(h2).toBeInTheDocument();
    })
})