import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TableClient } from "@azure/data-tables";
import { ClientSecretCredential } from "@azure/identity";
import { IRSVPBody } from "../interfaces/IRSVPBody";

export const PostRSVP: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const body: IRSVPBody = req.body;
    const tableClient = new TableClient(
        process.env.SWA_WEDDING_KOSTEJNOVI_STORAGE_ACCOUNT_URL,
        process.env.SWA_WEDDING_KOSTEJNOVI_TABLE_NAME,
        new ClientSecretCredential(
            process.env.SWA_WEDDING_KOSTEJNOVI_TENANT_ID,
            process.env.SWA_WEDDING_KOSTEJNOVI_CLIENT_ID,
            process.env.SWA_WEDDING_KOSTEJNOVI_CLIENT_SECRET
        )
    )

    await tableClient.upsertEntity({
        partitionKey: "rsvp",
        rowKey: body.email.trim().toLocaleLowerCase(),
        fullName: body.fullName.trim(),
        phoneNumber: body.phoneNumber.trim(),
        note: body.note.trim(),
        diet: body.diet,
        plusOne: body.plusOne,
        overnightStay: body.overnightStay
    });

    context.res = {
        status: 200
    };
};