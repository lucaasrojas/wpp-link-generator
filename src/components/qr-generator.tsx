import { useState } from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryCodes } from "@/lib/const/country-codes";
import { Label } from "@/components/ui/label";

const QRGenerator = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    if (!phoneNumber) {
      toast("Phone number required", {
        description: "Please enter a phone number to generate a QR code",
      });
      return;
    }
    setShowQR(true);
  };

  return (
    <Card className="w-full">
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="country-code">Country Code</Label>
          <Select onValueChange={setCountryCode} defaultValue={countryCode}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a country code" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country Code</SelectLabel>
                {countryCodes.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input
            id="phone-number"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
          />
        </div>
        <div className="pt-4">
          <Button onClick={handleGenerateQR} className="w-full">
            Generate QR Code
          </Button>
        </div>
        {showQR && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send/?phone=${countryCode}${phoneNumber}&text&type=phone_number&app_absent=1`,
                  "_blank"
                )
              }
              disabled={!phoneNumber || !countryCode}
            >
              Open WhatsApp
            </Button>

            <Button
              onClick={() =>
                window.open(
                  `https://web.whatsapp.com/send/?phone=${countryCode}${phoneNumber}&text&type=phone_number&app_absent=1`,
                  "_blank"
                )
              }
              disabled={!phoneNumber || !countryCode}
            >
              Open WhatsApp Web
            </Button>
            <div className="col-span-2 flex justify-center items-center">
              <QRCode
                size={256}
                style={{}}
                value={`https://api.whatsapp.com/send/?phone=${countryCode}${phoneNumber}&text&type=phone_number&app_absent=1`}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRGenerator;
