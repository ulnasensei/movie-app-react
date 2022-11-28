import React from "react";
import { Card } from "react-bulma-components";
import ContentLoader from "react-content-loader";

const DummyCard = () => {
    return (
        <Card style={{ width: 250, height: 500, margin: "auto" }}>
            <ContentLoader viewBox="0 0 250 500">
                {/* Only SVG shapes */}    
                <rect x="0" y="0" rx="0" ry="9" width="250" height="375" />
                <rect x="24" y="399" rx="4" ry="4" width="110" height="16" />
                <rect x="24" y="447" rx="3" ry="3" width="100" height="14" />
            </ContentLoader>
        </Card>
    );
};

export default DummyCard;
