"use client"

import Link from "next/link";
import React from "react";
import { Card, Nav } from "react-bootstrap";
const DashboardMenu = () => {
    return (
        <Card>
            <Card.Body>
                <Nav className="flex-column">
                    <Nav.Link href="/dashboard" as={Link}>Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard/products" as={Link}>Products</Nav.Link>
                    <Nav.Link href="/dashboard/profile" as={Link}>Profile</Nav.Link>
                </Nav>
            </Card.Body>
        </Card>
    );
};
export default DashboardMenu;
