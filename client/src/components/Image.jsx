import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Image = ({
	src,
	alt,
	style,
	imageStyle,
	size,
	clickable,
	width,
	height,
	circle,
	caption,
}) => {
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	const imageContainerStyle = circle
		? {
				...style,
				minWidth: size,
				width: size,
				height: size,
		  }
		: {
				...style,
				width,
				height,
		  };

	return (
		<div
			className={classNames(
				'image-holder',
				{ loading: !loaded },
				{ clickable, circle },
			)}
			style={imageContainerStyle}
		>
			<img
				src={error ? '/media/brand/icon.png' : src}
				alt={alt}
				style={imageStyle}
				onLoad={() => {
					setLoaded(true);
				}}
				onError={() => setError(true)}
			/>
			<a className="caption" href={caption.link} target="_blank">
				{caption.label}
			</a>
		</div>
	);
};

Image.propTypes = {
	alt: PropTypes.string,
	caption: PropTypes.object,
	circle: PropTypes.bool,
	clickable: PropTypes.bool,
	height: PropTypes.string,
	imageStyle: PropTypes.object,
	size: PropTypes.string,
	src: PropTypes.string.isRequired,
	style: PropTypes.object,
	width: PropTypes.string,
};

Image.defaultProps = {
	alt: 'image',
	caption: { label: '', link: '' },
	style: {},
	imageStyle: {},
	clickable: false,
	circle: false,
};

export default Image;
