import pandas as pd
from pandas import DataFrame

PATH_VRAGEN_xlsx = './src/resources/vragen.xlsx'
PATH_CONCLUSIES_xlsx = './src/resources/conclusies.xlsx'
PATH_VRAGEN_tsv = './src/resources/vragen.tsv'
PATH_CONCLUSIES_tsv = './src/resources/conclusies.tsv'

# Load excel sheet, remove redundant columns and rows and save as tsv
df_vragen: DataFrame = pd.read_excel(PATH_VRAGEN_xlsx)
df_vragen = df_vragen[['Id', 'Vraag', 'Ja', 'Nee', 'Informatie', 'Image']]
dv_vragen = df_vragen[df_vragen['Id'].notna()]
df_vragen.to_csv(PATH_VRAGEN_tsv, sep='\t', header=True, index=False, mode='w+', na_rep=None)

# Open saved tsv file and remove last line
with open(PATH_VRAGEN_tsv, "r") as filereader:
    newText = filereader.read()[0:-1]
    with open(PATH_VRAGEN_tsv, "w+") as filewriter:
        filewriter.write(newText)

# Load excel sheet, remove redundant columns and rows and save as tsv
df_conclusies = pd.read_excel(PATH_CONCLUSIES_xlsx)
df_conclusies = df_conclusies[['Id', 'Conclusie', 'Informatie', 'Image']]
dv_conclusies = df_conclusies[df_conclusies['Id'].notna()]
df_conclusies.to_csv(PATH_CONCLUSIES_tsv, sep='\t', header=True, index=False, mode='w+', na_rep=None)

# Open saved tsv file and remove last line
with open(PATH_CONCLUSIES_tsv, "r") as filereader:
    newText = filereader.read()[0:-1]
    with open(PATH_CONCLUSIES_tsv, "w+") as filewriter:
        filewriter.write(newText)
