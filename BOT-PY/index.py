from pyexpat.errors import messages
import discord
from discord.ext import commands
intents = discord.Intents.default()
intents.members=True
import random

client = commands.Bot(command_prefix = ">", intents=intents)


@client.command()
@commands.cooldown(1, 15, commands.BucketType.guild)
async def T(ctx):
    await ctx.send("TTTTTTTTTTTTTTT")

@T.error
async def T_error(ctx, error):
   if isinstance(error, commands.CommandOnCooldown):
      embed = discord.Embed(title=f" ", description='⌇꒰<a:emoji_67:764718353721589770> ꒰Enfriamiento de 15s꒱ <a:emoji_65:764718307529588786>꒱⌇', color=discord.Color.dark_theme())   
      await ctx.send(embed=embed)

@client.command()
@commands.cooldown(1, 15, commands.BucketType.guild)
async def TT(ctx):
    await ctx.send("Cooldown")

@TT.error
async def TT_error(ctx, error):
   if isinstance(error, commands.CommandOnCooldown):
      embed = discord.Embed(title=f" ", description='⌇꒰<a:emoji_67:764718353721589770> ꒰Enfriamiento de 15s꒱ <a:emoji_65:764718307529588786>꒱⌇', color=discord.Color.dark_theme())   
      await ctx.send(embed=embed)

@client.command(pass_context=True)
@commands.has_permissions(administrator=True)
async def purge(ctx, limit: int):

   await ctx.channel.purge(limit=limit)
   embed = discord.Embed(title=f"┊<a:emoji_59:764718027101962247> 〔₊ ੈ↷Purge cmd ᵕ̈  ೃ 〕", description='┊➜ ˗ˏˋ╰⌊Cleared by {} ⌉╮ˎˊ˗'.format(ctx.author.mention),color=discord.Color.magenta())
   embed.add_field(name="┊➜ '₊˚˗ˏˋMonto de borrados:┈ · ·✧",value="┊➜ ˗ˏˋ╰⌊{} mensajes eliminados⌉╮ˎˊ˗☁️".format(limit))
   embed.set_author(name=ctx.author.display_name, icon_url=ctx.author.avatar_url)
   await ctx.send(embed=embed, delete_after=3)
   
@purge.error
async def purge_error(ctx, error):
   if isinstance(error, commands.MissingPermissions):
      embed = discord.Embed(title=f" ", description=f'⇉ <a:b_:767123315146883082> [You cant do that! ✦✦', color=discord.Color.magenta())   
      await ctx.send(embed=embed, delete_after=5)

@client.event
async def on_member_join(member):
   rutina = random.randint(0,1)
   ment = member.display_name
   if rutina == 0:
      embed = discord.Embed(title=f'•❲<:emoji_58:764718005174272060>❳︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶❲<:emoji_58:764718005174272060>❳•', description=f'│ㅤㅤ──╯꒰♡꒱ 𝑺𝒘𝒆𝒆𝒕 𝑷𝒂𝒓𝒂𝒅𝒊𝒔𝒆 ꒰♡꒱╰──', colour=0xff6a8d)
      embed.set_author(name='')
      embed.add_field(name='│✄. . . . . . . . . . . . . . . . . . . . . . . . . . . ↻° :   ﹢', value='•❲<:emoji_58:764718005174272060>❳   =͟͟͞ʕ•̫͡•ʔ       ⏌ roles ⎿         =͟͟͞ʕ•̫͡•ʔ  ❲<:emoji_58:764718005174272060>❳•    \n│ㅤ↬xㅤ✰;; <#904434101820477441>   ♡ʾʾ . . ┊⿻    \n│ㅤ↬xㅤ✰;; <#904434084879679508>    ♡ʾʾ . . ┊⿻    \n│ㅤ↬xㅤ✰;; <#918350578659237909>    ♡ʾʾ . . ┊⿻    \n│✄. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .ⵓ‧˖˚࿔₊˚')
      embed.add_field(name='•❲<:emoji_58:764718005174272060>❳   =͟͟͞ʕ•̫͡•ʔ  ⏌ ¿Problemas? ⎿  =͟͟͞ʕ•̫͡•ʔ  ❲<:emoji_58:764718005174272060>❳•', value='│ㅤ↬xㅤ✰;; - ♡ʾʾ . . ┊⿻   \n│ㅤ↬xㅤ✰;; Mar <3#1348 ♡ʾʾ . . ┊⿻  \n│✄. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .ⵓ‧˖˚࿔₊˚')
      embed.set_footer(text='│✄⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅  ⋅ ⋅ ⋅ ⋅ ⋅ ⋅-๑‧˚₊꒷')
      embed.set_image(url='https://media.discordapp.net/attachments/748241098257727549/941421227904491610/706f0d946c78a4f19717d6f9d4e84b5a.gif')
      print(f'{member} has joined a server.')
      await member.guild.system_channel.send(f'<@&940134592474669076> Vengan a dar la bienvenida')
      await member.guild.system_channel.send(embed=embed)
   elif rutina == 1:
      embed = discord.Embed(title=f'┊<a:emoji_62:764718151920255007>☁︎ ♡𝔹𝕚𝕖𝕟𝕧𝕖𝕟𝕚𝕕𝕠/𝕒 {ment} ♡ ☁︎<a:emoji_62:764718151920255007>', description=f'┊ㅤㅤㅤㅤ꒦꒷︶︶︶︶︶︶︶ ⊹ ˚ ｡', colour=0xff6a8d)
      embed.set_author(name='╭─•︵︵︵︵︵︵︵︵︵︵︵︵︵︵︵')
      embed.add_field(name='┊ㅤㅤ ✧ ꒰ ⌦ No olvides revisar Ꮺˊ-', value='┊ ㅤ<#904434101820477441>   ⸙↬ ㅤ<#904434084879679508>     ㅤㅤ┊ㅤ<#918350578659237909>  ⸙↬ㅤ<#904434115867205743>')
      embed.add_field(name='┊₊˚˗ˏˋInconvenientes escribirle aˎˊ˗˚₊', value='┊ㅤㅤㅤㅤ⌇ ꒰ - ꒱ ⌇')
      embed.set_footer(text='╰─•﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀')
      print(f'{member} has joined a server.')
      await member.guild.system_channel.send(f'<@&940134592474669076> Vengan a dar la bienvenida')
      await member.guild.system_channel.send(embed=embed)

@client.event
async def on_message(message):
   msg = message.content
   if msg == 'Hola' or msg == 'hola':
      rutina = random.randint(0,7)
      if rutina == 0:
         await message.channel.send('Jelouh ¿Que dice la parejita?')
      elif rutina == 1:
         await message.channel.send('Ya llegó')
      elif rutina == 2:
          await message.channel.send('Pipupipu') 
   elif msg == 'Terrible' or msg == 'terrible':
       rutina = random.randint(0,7)
       if rutina == 0:
           await message.channel.send('Terrible las ganas de bumpear')
       elif rutina == 1:
           await message.channel.send('Terrible')
       elif rutina == 2: 
           await message.channel.send('Horrible')
   elif msg == '!d bump':
       rutina = random.randint(0,7)
       if rutina == 0:
           await message.channel.send('bumpees')
       elif rutina == 1:
           await message.channel.send('<:xd:917126143503634453> imagina bumpear')
       elif rutina == 2:
            await message.channel.send('Bumpeame')
   elif msg == '😍' or msg == '😍 😍' or msg == '😍 😍 😍':
       rutina = random.randint(0,4)
       if rutina == 0:
        await message.channel.send('ABC')
   elif msg == '😻' or msg == '😻 😻' or msg == '😻 😻 😻':
       rutina = random.randint(0,5)
       if rutina == 0:
        await message.channel.send('Que emoji mas soso')
       if rutina == 1:
        await message.channel.send('Oso') 

@client.event
async def on_ready():   
    game = discord.Game('✧ ꒰ ⌦ ⸝⸝₊˚ଘ ')
    await client.change_presence(status=discord.Status.idle, activity=game)
    print('Estoy lista')

#client.run('-') #Token de bot de testeo
client.run('-')