'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const consumables: string[] = [
    "Blankets",
    "Coatings",
    "Fountain Solutions",
    "Lubricants",
    "Printing Inks",
    "Rollers",
    "Silicones",
    "Special Chemistry",
    "Washes",
];

interface FormData {
    name: string;
    email: string;
    consumable: string;
    quantity: string;
}

export default function PurchaseForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        consumable: "",
        quantity: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Order submitted!");
    };

    return (
        <>
            <section className="bg-primary text-white text-center py-10 lg:py-12 px-8 group">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">Consumables</h1>
                <div className={`w-0 mx-auto group-hover:w-third h-1 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </section>
            <motion.div className="flex justify-center p-6">
                <Card className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">Purchase Consumables</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Your Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Your Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Select a Consumable</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, consumable: value })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Consumable" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {consumables.map((item, index) => (
                                            <SelectItem key={index} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input
                                    id="quantity"
                                    type="number"
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">Submit Order</Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    );
}
