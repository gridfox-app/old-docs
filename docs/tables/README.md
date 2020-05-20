---
sidebar: auto
sidebarDepth: 2
prev: /projects/
next: /screens/
---
# Tables

## What are Tables?

Tables are similar to spreadsheet worksheets.  You configure fields and create records, where fields can be thought of as columns, and records as rows.  For example, to create a table to store contact information in a project, go to edit mode and select the data tab.


![DataTab](../Images/DataTab.png)
​

From the data page, click the add table button.
​

![AddTable](../Images/AddTable.png)
​

Double click the header containing "New Entity" and rename to "Companies".
​

![CompaniesEmpty](../Images/CompaniesEmpty.png)
​

## Adding Fields
​
Click the plus button on the table header to add a new field, repeat the process to add the fields below:

​
![ContactFields](../Images/CompaniesFields.png)
​

Save your new table by clicking the save button in the top right hand.
​

![Save](../Images/Save.png)
​

::: tip
You can take a look at your app by clicking the **Close Editor** button.  You can then return to the table designer by clicking the **Edit Project** button and clicking the **Data** tab.
:::
​
## Field Types
​
When creating a new field Gridfox allows you to specify a field type, to support calculations and validation of data.  For example, SUM number fields or validate dates are in the correct format.
​
| Type       | Description                                                          | Settings                                                              |
|:-----------|----------------------------------------------------------------------|-----------------------------------------------------------------------|
| Text       | Store text based information, such as names and telephone numbers.   | Choose between small, medium and large text fields.                   |
| Number     | Store numbers that you can perform functions on such as +, -, SUM.   |                                                                       |
| Money      | Store financial values in your local currency                        |                                                                       |
| Date       | Store dates                                                          |                                                                       |
| DateTime   | Store dates & times                                                  |                                                                       |
| Money      | Store financial values in your local currency                        |                                                                       |
| List       | Choices against a custom list of values in a dropdown                | Specify your custom list.                                             |
| Counter    | An auto-incrementing counter (1,2,3..), used to give unique IDs      |                                                                       |
| Image      | Store images                                                         |                                                                       |
| Icon       | Store images to be displayed on records, such as company logos       |                                                                       |
| Computed   | Create dynamic fields based on the values of others (SUM, COUNT)     | Enter the formula, similar to a spreadsheet function                  |
​
## Linking Tables
​
Gridfox becomes really powerful when you start to add multiple tables and link them together.
    
For example, create a new Contacts table and link it from your Companies table to allow you to record multiple contact records against each company record. To do this, create a new table with the follow fields:
​

![ContactsFields](../Images/ContactsFields.png)
​

Now click the link icon (middle button on top right of each table) on the Companies table, and then click the link icon on the Contacts.
​

![LinkedTables](../Images/LinkedTables.png)
​

::: tip
The order you click the link icons is important, click the parent table first.  For example, as each Company record will **have many** Contact records, click the Company table link icon first, then the Contact table link icon.
:::
​
## Advanced Field Types
​
To access a fields settings, hover over the field and click on the settings cog to access the settings for each field type.
​

![FieldSettings](../Images/FieldSettings.png)
​ 

### Text
​
Change the way text fields are displayed in your project by changing the display type.
​

![NotesSettings](../Images/NotesSettings.png)
​

### List
​
Restrict the information users can enter into a field by providing a list of field values.  For example, create a new field called Company Type and change the field type to List.
​

![ListSettings](../Images/CompanyTypeField.png)
​

Click the settings cog next to the List field and add the following field types:
​

![ListSettings](../Images/ListSettings.png)
​

### Computed
​
Computed fields are a way of performing calculations against you table fields.  Currently Gridfox supports SUM & COUNT.  For example, to add a count of Contacts against each Company, add a computed field.
​

![ComputedField](../Images/ComputedField.png)
​

Then enter COUNT(Contact)
​

![ComputedFunction](../Images/ComputedFunction.png)
​

## Advanced Tables Settings
​
Each table requires one or more **ID fields** and one of these ID fields must be set to be the **Reference field**. 
​
### What are ID fields?
​
ID fields are unique fields, which means they must no contact duplicate information.  For example, an invoice number field on an invoices table, or a registration number field on a vehicles table.  
​
### What are Reference fields?
Reference fields are the way users can identify links between records.  For example, when creating a new contact record, the user will choose the company from a dropdown list, the field displayed in this list will be the Reference field.  
​
### Editing ID & Reference Fields
You can set a field to be the Reference field by holding *ctrl* and clicking a field.  The reference field is displayed on the table by having a light blue background and a blue bar at the left of the field. 
​
To configure ID & Reference fields further click the Advanced View.
​

![AdvancedView](../Images/AdvancedView.png)
​

From here you can select which fields are ID (unique) fields and which fields will be the Reference field. 
​

![AdvancedTableView](../Images/AdvancedTableView.png)
​

## Creating Tables from Spreadsheets
​
### Preparing Your Import File
You can also create projects by uploading spreadsheets; this allows you to define the structure of your projects and also import information.
​
Create a spreadsheet with the following tabs:
​
![ImportCompany](../Images/ImportCompany.png)
​
![ImportContact](../Images/ImportContact.png)
​
A separate table will be created for each tab.  The fields for each table will be taken from the first row of your worksheet.  
​
#### Import Tags
​
In your first row you can add tags to the end of each field to specify:
​
- **Ref & ID Fields** - by appending #Ref and #ID
- **Fields Types** - by appending #*FieldType*, for example, #Date
- **Table Links** - to reference parent tables by adding the *{parent table}.* before the field, for example, Company.CompanyName.
​
::: tip
If you specify a field as being a List, Gridfox will take all the unique values in that column and populate the List options for you.
:::
​
### Importing Tables
​
In the table designer, click the Upload Spreadsheet button.
​

![UploadSpreadsheet](../Images/UploadSpreadsheet.png)
​

Select your import spreadsheet.  You can then configure table names, ID & Ref fields and table links.
​

![ImportSettings](../Images/ImportSettings.png)
​

Click Build Data Model and Gridfox will create the table structure and import your data. 
​
