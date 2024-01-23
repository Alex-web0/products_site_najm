import { useState } from "react";
import { sendMessageThroughEmail } from "../../firebase";
import { PrimaryOrOutlinedButton } from "../PrimaryOutlinedButton";
import { CupertinoTextField } from "./CupertinoTextField";
import { EMAIL } from "../../constants/keys";

interface TextInputStyleConfig {
  label: string;
  errorText?: string;
  textDirection?: "text-left" | "text-right";
}

interface ContactFormFieldsConfig {
  firstName: TextInputStyleConfig;
  lastName: TextInputStyleConfig;
  organization: TextInputStyleConfig;
  messageTitle: TextInputStyleConfig;
  contactReason: TextInputStyleConfig;
  websiteOrEmail: TextInputStyleConfig;
  message: TextInputStyleConfig;
  submitLiteral?: string;
}

interface Props {
  config?: ContactFormFieldsConfig;
}

enum FormStatus {
  loading,
  initial,
  success,
}

export function ContactForm({ config }: Props) {
  const [formState, setFormState] = useState<FormStatus>(FormStatus.initial);

  return (
    <form
      onSubmit={async (event): Promise<boolean> => {
        event.preventDefault();
        console.log(event.defaultPrevented);
        console.log(event);
        const t = event.target as any;
        const firstName = t.FirstName.value ?? "Not provided";
        const lastName = t.LastName.value ?? "Not provided";
        const organization = t.Organization.value ?? "Not provided";
        const contactReason = t.ContactReason.value ?? "Not provided";
        const websiteOrEmail = t.WebsiteOrEmail.value ?? "Not provided";
        const messageTitle = t.MessageTitle.value ?? "Not provided";
        const message = t.Message.value ?? "Not provided";

        // the string to be sent to telegram
        const telegramMessage = `
        Message From Landing Page

        Name: ${firstName} ${lastName}.

        \n
        Organization: ${organization}.
        
        \n
        Contact Reason: ${contactReason}.
        \n

        Website/Email: ${websiteOrEmail}.
        \n
        
        Title: ${messageTitle}.

        \n

        Message:
        ${message}.
        
        <i>-Sent From Barora Site.</i>
        `;

        const mailMessage = `
        mailto:${EMAIL}?subject=${messageTitle}&body=Hello, I am ${firstName} ${lastName} from ${organization}.\nsee: ${websiteOrEmail}.\n\nContacting because${contactReason}.\nAnd I want to leave the follwoing message:\n${message}
        `;

        setFormState(FormStatus.loading);

        await sendMessageThroughEmail(mailMessage).then(() =>
          setFormState(FormStatus.success)
        );
        // await sendMessageToTelegramThroughServer(messageString).then(() =>
        //   setFormState(FormStatus.success)
        // );

        return false;
      }}
      id="ContactForm"
      className="w-full"
    >
      {/* Name +  Organization Row */}
      <div className="flex flex-col sm:flex-row  justify-between  gap-4 items-top my-3">
        <div className="flex-row flex flex-[2] gap-2">
          <CupertinoTextField
            idName="FirstName"
            helperError={config?.firstName.errorText}
            required={true}
            label={config?.firstName.label ?? "First Name"}
          ></CupertinoTextField>
          <CupertinoTextField
            idName="LastName"
            helperError={config?.lastName.errorText}
            label={config?.lastName.label ?? "Last Name"}
            required={true}
          ></CupertinoTextField>
        </div>
        <div className="flex flex-[2]">
          <CupertinoTextField
            idName="Organization"
            required={true}
            helperError={config?.organization.errorText}
            label={config?.organization.label ?? "Organization"}
          ></CupertinoTextField>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  justify-between  gap-4 items-top my-3">
        {/* Contact Reason +  Email/Webaite */}

        <div className="flex flex-col flex-1 gap-3">
          <CupertinoTextField
            idName="Contact Reason"
            helperError={config?.contactReason.errorText}
            label={config?.contactReason.label ?? "Contact Reason"}
            required={true}
          ></CupertinoTextField>
          <CupertinoTextField
            idName="Website Or Email"
            required={true}
            helperError={config?.websiteOrEmail.errorText}
            label={config?.websiteOrEmail.label ?? "Website Or Email"}
          ></CupertinoTextField>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          {/* Title +  Message */}

          <CupertinoTextField
            idName="Message Title"
            required={true}
            multiLine={true}
            helperError={config?.messageTitle.errorText}
            label={config?.messageTitle.label ?? "Message Title"}
          ></CupertinoTextField>
          <CupertinoTextField
            idName="Message"
            required={true}
            multiLine={true}
            helperError={config?.message.errorText}
            label={config?.message.label ?? "Message"}
          ></CupertinoTextField>
        </div>
      </div>

      {/* Submission */}

      <div className="p-1 sm:p-2"></div>

      <div className="w-full flex justify-end">
        {formState == FormStatus.initial
          ? PrimaryOrOutlinedButton({
              type: "filled",
              label: config?.submitLiteral ?? "Submit",
              onClicked: () => {},
            })
          : formState == FormStatus.loading
          ? "Loading..."
          : "Success!"}
      </div>
    </form>
  );
}
