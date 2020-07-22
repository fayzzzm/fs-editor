import React, { useRef, useEffect } from 'react';

import './styles.scss';

export const WindowUI: React.FC = () => {
    const iframeWindow = useRef<HTMLIFrameElement>(null);

    return (
        <div className="window-ui">
            <iframe ref={iframeWindow} src="http://localhost:3000"></iframe>
        </div>
    );
};
