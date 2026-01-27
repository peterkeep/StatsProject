<?xml version="1.0"?>
<xsl:stylesheet 
version="1.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="./core/pretext-latex.xsl"/>

<xsl:template match="section">
    <xsl:apply-imports />
    <xsl:text>\cleardoublepage&#xA;&#xA;</xsl:text>
</xsl:template>

<xsl:template match="exercise" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        colbacktitle=StatsLight!10,
        coltitle=black, 
        leftrule=0.5mm,
        rightrule=0.5mm,
        titlerule=0mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=StatsLight, 
        colback=StatsLight!10,
        enhanced,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>
        fonttitle= \large \bfseries,
        colbacktitle=StatsLight!10, 
        coltitle=black, 
        leftrule=0mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=StatsLight, 
        colback=StatsLight!10,
        enhanced,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="note" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        sharpish corners,
        colframe=StatsLight,
        colback=StatsLight!10,
        colbacktitle=StatsLight!10, 
        coltitle=black, 
        leftrule=1.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0mm,
        bottomrule=0mm,
        sharpish corners,
        enhanced,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="aside" mode="tcb-style">
     <xsl:text>
        fonttitle=\bfseries,
        sharpish corners,
        colframe=StatsLight,
        colback=StatsLight!10,
        colbacktitle=StatsLight!10, 
        coltitle=black, 
        leftrule=1.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0mm,
        bottomrule=0mm,
        sharpish corners,
        enhanced,
        breakable
    </xsl:text>
</xsl:template>

</xsl:stylesheet>