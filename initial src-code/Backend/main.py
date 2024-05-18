import ClientAccount
import TellerAccount
import EtransferPayee
from datetime import datetime
import Payee
from database import Database

class Bank:
    database = Database('/Users/tahshin/CodeBlocks/Slack-Bot/creds.json', "Test")
    sheet = database.open_worksheet('UserInfo')

    # def login(self, usrname, passwd):


        
